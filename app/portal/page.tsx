"use client";

/** Living Infrastructure Portal: verified local contribution, never asset custody, trading, transfers, or balances. */
import { FormEvent, useEffect, useMemo, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { getPortalSupabase, isPortalSupabaseConfigured } from "./portal-supabase";

const mark = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663873176403/JQEkGcJDqtfYTckw.png";
const locales = ["ko", "en", "ja", "es"] as const;
type Locale = (typeof locales)[number];
type Tab = "overview" | "ledger" | "projects" | "access" | "account" | "review";
type PortalProfile = { id: string; email: string; display_name: string | null; role: "participant" | "verifier" | "admin"; status: "pending" | "active" | "suspended" };
type PortalProject = { id: string; code: string; name: string; region_label: string | null; status: string };
type Contribution = { id: string; project_id: string; category: string; description: string; status: string; submitted_at: string };
type Decision = { id: string; contribution_id: string; decision: string; review_note: string; created_at: string };
type Entitlement = { id: string; entitlement_key: string; status: string; valid_until: string | null };

const copy = {
  ko: { home: "홈으로", label: "PHOENIX PORTAL / STAGE 02", title: ["검증된 기여를", "운영의 접근으로"], intro: "Phoenix Portal은 지역의 주거·에너지·생태·운영 기여를 검증하고, 비금융 서비스 접근으로 연결하는 초대 기반 포털입니다.", notice: "거래, 입출금, 자산 보관, 개인키, 가격 정보는 제공하지 않습니다.", nav: { overview: "개요", ledger: "기여 장부", projects: "프로젝트", access: "서비스 접근", account: "계정·보안", review: "관리자 검토" }, views: { overview: ["운영 개요", "계정 상태와 검증된 참여 현황을 확인합니다."], ledger: ["나의 기여 장부", "본인이 제출한 활동과 검토 결과만 표시됩니다."], projects: ["프로젝트", "기여가 연결되는 Living Infrastructure 실증 단위입니다."], access: ["서비스 접근", "검증 결정에 따라 부여되는 비금융 접근 권한입니다."], account: ["계정·보안", "이메일 로그인과 초대 기반 참여 상태를 관리합니다."], review: ["관리자 검토", "제출 내용을 검토하고 승인·반려·보완 요청을 기록합니다."] }, login: "이메일로 로그인", send: "로그인 링크 보내기", sent: "로그인 링크를 보냈습니다. 이메일에서 링크를 열어 계속해 주세요.", email: "이메일 주소", signOut: "로그아웃", pending: "초대 승인 대기", active: "검증 참여자", suspended: "접근 일시 중지", configured: "인증·데이터 연결 준비", notConfigured: "인증 환경 변수 연결 대기", submitTitle: "기여 활동 제출", category: "활동 유형", project: "프로젝트", description: "활동 설명", submit: "검토 요청 보내기", submitting: "제출 중", noRecords: "아직 제출한 기여 기록이 없습니다.", noAccess: "현재 부여된 서비스 접근 권한이 없습니다.", noReviews: "검토 대기 중인 기여가 없습니다.", decision: "결정", note: "검토 메모", approve: "승인", reject: "반려", changes: "보완 요청", saveDecision: "결정 기록", signedIn: "로그인됨", security: ["자산 수탁 없음", "개인키·지갑·입출금 주소·잔고를 저장하거나 표시하지 않습니다."], boundary: ["거래 기능 없음", "매수·매도·주문·가격·수익률 정보를 제공하지 않습니다."], formHint: "기여 내용은 관리자 검토 후 승인·반려·보완 요청 상태로 기록됩니다.", privacy: "이메일과 선택적 표시 이름 외의 개인정보는 최소화합니다.", errors: { configuration: "인증 연결이 아직 구성되지 않았습니다.", generic: "요청을 처리하지 못했습니다. 잠시 후 다시 시도해 주세요.", inactive: "초대 승인 이후에 기여를 제출할 수 있습니다." } },
  en: { home: "Home", label: "PHOENIX PORTAL / STAGE 02", title: ["Verified contribution,", "operating access"], intro: "Phoenix Portal verifies local housing, energy, ecology, and operations contribution, then connects it to non-financial service access.", notice: "There is no trading, deposit, withdrawal, asset custody, private-key, or price information.", nav: { overview: "Overview", ledger: "My ledger", projects: "Projects", access: "Service access", account: "Account & security", review: "Admin review" }, views: { overview: ["Operations overview", "Review your account state and verified participation."], ledger: ["My contribution ledger", "Only your submissions and their review outcomes are shown."], projects: ["Projects", "Living Infrastructure pilot units connected to a contribution."], access: ["Service access", "Non-financial access granted after a verification decision."], account: ["Account & security", "Manage email sign-in and invitation-based participation."], review: ["Admin review", "Review submissions and record approval, rejection, or a request for changes."] }, login: "Sign in by email", send: "Send sign-in link", sent: "A sign-in link was sent. Open it from your email to continue.", email: "Email address", signOut: "Sign out", pending: "Invitation pending", active: "Verified participant", suspended: "Access paused", configured: "Authentication and data ready", notConfigured: "Authentication environment pending", submitTitle: "Submit a contribution", category: "Activity type", project: "Project", description: "Activity description", submit: "Send for review", submitting: "Submitting", noRecords: "You have not submitted a contribution yet.", noAccess: "There is no service access currently granted.", noReviews: "There are no contributions awaiting review.", decision: "Decision", note: "Review note", approve: "Approve", reject: "Reject", changes: "Request changes", saveDecision: "Record decision", signedIn: "Signed in", security: ["No asset custody", "We do not store or display private keys, wallets, deposit addresses, or balances."], boundary: ["No trading", "We do not provide buy/sell, orders, pricing, or return information."], formHint: "A contribution is recorded as approved, rejected, or changes requested after administrator review.", privacy: "We minimise personal data beyond your email and optional display name.", errors: { configuration: "Authentication is not configured yet.", generic: "The request could not be processed. Please try again shortly.", inactive: "You can submit after your invitation is approved." } },
  ja: { home: "ホーム", label: "PHOENIX PORTAL / STAGE 02", title: ["検証された貢献を", "運用へのアクセスへ"], intro: "Phoenix Portalは、地域の住まい・エネルギー・生態・運用への貢献を検証し、非金融サービスへのアクセスにつなぐ招待制ポータルです。", notice: "取引、入出金、資産保管、秘密鍵、価格情報は提供しません。", nav: { overview: "概要", ledger: "貢献台帳", projects: "プロジェクト", access: "サービス利用", account: "アカウント・セキュリティ", review: "管理者審査" }, views: { overview: ["運用の概要", "アカウント状態と検証済みの参加状況を確認します。"], ledger: ["自分の貢献台帳", "自分が提出した活動と審査結果のみ表示されます。"], projects: ["プロジェクト", "貢献がつながるLiving Infrastructureの実証単位です。"], access: ["サービス利用", "審査決定後に付与される非金融サービスのアクセスです。"], account: ["アカウント・セキュリティ", "メールログインと招待制の参加状態を管理します。"], review: ["管理者審査", "提出内容を審査し、承認・却下・修正依頼を記録します。"] }, login: "メールでログイン", send: "ログインリンクを送る", sent: "ログインリンクを送信しました。メールのリンクを開いて続けてください。", email: "メールアドレス", signOut: "ログアウト", pending: "招待承認待ち", active: "検証済み参加者", suspended: "アクセス一時停止", configured: "認証・データ接続の準備", notConfigured: "認証環境変数の接続待ち", submitTitle: "貢献活動を提出", category: "活動タイプ", project: "プロジェクト", description: "活動の説明", submit: "審査を依頼", submitting: "送信中", noRecords: "提出した貢献記録はまだありません。", noAccess: "現在付与されたサービス利用権限はありません。", noReviews: "審査待ちの貢献はありません。", decision: "決定", note: "審査メモ", approve: "承認", reject: "却下", changes: "修正依頼", saveDecision: "決定を記録", signedIn: "ログイン済み", security: ["資産の保管なし", "秘密鍵、ウォレット、入出金アドレス、残高を保存・表示しません。"], boundary: ["取引機能なし", "売買、注文、価格、収益率の情報を提供しません。"], formHint: "貢献内容は、管理者の審査後に承認・却下・修正依頼として記録されます。", privacy: "メールと任意の表示名以外の個人情報を最小化します。", errors: { configuration: "認証接続はまだ設定されていません。", generic: "リクエストを処理できませんでした。しばらくしてから再試行してください。", inactive: "招待承認後に貢献を提出できます。" } },
  es: { home: "Inicio", label: "PHOENIX PORTAL / STAGE 02", title: ["Contribución verificada,", "acceso operativo"], intro: "Phoenix Portal verifica la contribución local de vivienda, energía, ecología y operación, y la conecta con acceso a servicios no financieros.", notice: "No hay negociación, depósitos, retiros, custodia de activos, claves privadas ni información de precios.", nav: { overview: "Resumen", ledger: "Mi registro", projects: "Proyectos", access: "Acceso a servicios", account: "Cuenta y seguridad", review: "Revisión admin." }, views: { overview: ["Resumen operativo", "Consulta el estado de tu cuenta y participación verificada."], ledger: ["Mi registro de contribuciones", "Solo se muestran tus envíos y sus resultados de revisión."], projects: ["Proyectos", "Unidades piloto de Living Infrastructure vinculadas a una contribución."], access: ["Acceso a servicios", "Acceso no financiero concedido tras una decisión de verificación."], account: ["Cuenta y seguridad", "Gestiona el acceso por email y la participación por invitación."], review: ["Revisión administrativa", "Revisa envíos y registra aprobación, rechazo o solicitud de cambios."] }, login: "Acceder por email", send: "Enviar enlace de acceso", sent: "Se envió un enlace. Ábrelo desde tu correo para continuar.", email: "Correo electrónico", signOut: "Cerrar sesión", pending: "Invitación pendiente", active: "Participante verificado", suspended: "Acceso pausado", configured: "Autenticación y datos preparados", notConfigured: "Falta configurar autenticación", submitTitle: "Enviar una contribución", category: "Tipo de actividad", project: "Proyecto", description: "Descripción de la actividad", submit: "Enviar a revisión", submitting: "Enviando", noRecords: "Aún no has enviado una contribución.", noAccess: "No hay acceso a servicios concedido actualmente.", noReviews: "No hay contribuciones pendientes de revisión.", decision: "Decisión", note: "Nota de revisión", approve: "Aprobar", reject: "Rechazar", changes: "Pedir cambios", saveDecision: "Registrar decisión", signedIn: "Sesión iniciada", security: ["Sin custodia de activos", "No almacenamos ni mostramos claves privadas, carteras, direcciones de depósito ni saldos."], boundary: ["Sin negociación", "No ofrecemos compra/venta, órdenes, precios ni rentabilidades."], formHint: "Una contribución se registra como aprobada, rechazada o con cambios solicitados tras la revisión administrativa.", privacy: "Minimizamos los datos personales más allá del email y el nombre visible opcional.", errors: { configuration: "La autenticación aún no está configurada.", generic: "No se pudo procesar la solicitud. Inténtalo de nuevo en breve.", inactive: "Podrás enviar una contribución después de aprobar tu invitación." } },
} as const;

const categoryOptions = ["housing", "energy", "ecology", "operations", "research", "community"];

export default function PortalPage() {
  const [locale, setLocale] = useState<Locale>("ko");
  const [tab, setTab] = useState<Tab>("overview");
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<PortalProfile | null>(null);
  const [projects, setProjects] = useState<PortalProject[]>([]);
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [entitlements, setEntitlements] = useState<Entitlement[]>([]);
  const [reviewQueue, setReviewQueue] = useState<Contribution[]>([]);
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ projectId: "", category: "housing", description: "" });
  const [reviewNotes, setReviewNotes] = useState<Record<string, string>>({});
  const configured = isPortalSupabaseConfigured();
  const t = copy[locale];
  const isAdmin = profile?.role === "admin" && profile.status === "active";
  const availableTabs = useMemo(() => (isAdmin ? ["overview", "ledger", "projects", "access", "account", "review"] : ["overview", "ledger", "projects", "access", "account"]) as Tab[], [isAdmin]);

  useEffect(() => {
    const stored = window.localStorage.getItem("phoenix-uos-language");
    if (stored && locales.includes(stored as Locale)) setLocale(stored as Locale);
  }, []);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  useEffect(() => { if (!availableTabs.includes(tab)) setTab("overview"); }, [availableTabs, tab]);

  useEffect(() => {
    const client = getPortalSupabase();
    if (!client) return;
    const syncSession = async () => {
      const { data } = await client.auth.getSession();
      setUser(data.session?.user ?? null);
    };
    void syncSession();
    const { data: listener } = client.auth.onAuthStateChange((_event, session) => setUser(session?.user ?? null));
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const client = getPortalSupabase();
    if (!client || !user) { setProfile(null); setContributions([]); setEntitlements([]); setReviewQueue([]); return; }
    const load = async () => {
      const [{ data: nextProfile }, { data: nextProjects }, { data: ownContributions }, { data: nextEntitlements }] = await Promise.all([
        client.from("portal_profiles").select("id,email,display_name,role,status").eq("id", user.id).maybeSingle(),
        client.from("portal_projects").select("id,code,name,region_label,status").eq("status", "active").order("created_at"),
        client.from("portal_contributions").select("id,project_id,category,description,status,submitted_at").order("submitted_at", { ascending: false }),
        client.from("portal_service_entitlements").select("id,entitlement_key,status,valid_until").order("created_at", { ascending: false }),
      ]);
      setProfile((nextProfile as PortalProfile | null) ?? null);
      setProjects((nextProjects as PortalProject[] | null) ?? []);
      setContributions((ownContributions as Contribution[] | null) ?? []);
      setEntitlements((nextEntitlements as Entitlement[] | null) ?? []);
      if (nextProjects?.[0] && !form.projectId) setForm((current) => ({ ...current, projectId: nextProjects[0].id }));
      if ((nextProfile as PortalProfile | null)?.role === "admin" && (nextProfile as PortalProfile | null)?.status === "active") {
        const { data } = await client.from("portal_contributions").select("id,project_id,category,description,status,submitted_at").in("status", ["submitted", "under_review", "changes_requested"]).order("submitted_at", { ascending: true });
        setReviewQueue((data as Contribution[] | null) ?? []);
      }
    };
    void load();
  }, [user]);

  const chooseLocale = (next: Locale) => { setLocale(next); window.localStorage.setItem("phoenix-uos-language", next); };
  const refresh = () => setUser((current) => current ? { ...current } : current);
  const sendMagicLink = async (event: FormEvent) => {
    event.preventDefault();
    const client = getPortalSupabase();
    if (!client) return setFeedback(t.errors.configuration);
    setLoading(true); setFeedback("");
    const { error } = await client.auth.signInWithOtp({ email: email.trim().toLowerCase(), options: { emailRedirectTo: `${window.location.origin}/portal` } });
    setLoading(false); setFeedback(error ? t.errors.generic : t.sent);
  };
  const signOut = async () => { const client = getPortalSupabase(); if (client) await client.auth.signOut(); setUser(null); setProfile(null); setFeedback(""); };
  const submitContribution = async (event: FormEvent) => {
    event.preventDefault();
    const client = getPortalSupabase();
    if (!client) return setFeedback(t.errors.configuration);
    if (!user || profile?.status !== "active") return setFeedback(t.errors.inactive);
    setLoading(true); setFeedback("");
    const { error } = await client.from("portal_contributions").insert({ user_id: user.id, project_id: form.projectId, category: form.category, description: form.description.trim(), evidence_refs: [] });
    setLoading(false);
    if (error) return setFeedback(t.errors.generic);
    setForm((current) => ({ ...current, description: "" })); setFeedback(t.submitTitle); refresh();
  };
  const recordDecision = async (contributionId: string, decision: "approved" | "rejected" | "changes_requested") => {
    const client = getPortalSupabase();
    const note = reviewNotes[contributionId]?.trim() ?? "";
    if (!client || note.length < 5) return setFeedback(t.errors.generic);
    setLoading(true); setFeedback("");
    const { error } = await client.from("portal_verification_decisions").insert({ contribution_id: contributionId, decision, review_note: note });
    setLoading(false); setFeedback(error ? t.errors.generic : t.saveDecision); refresh();
  };
  const accountLabel = !user ? t.login : profile?.status === "active" ? t.active : profile?.status === "suspended" ? t.suspended : t.pending;

  return <main className="portal-shell">
    <header className="portal-topbar"><a className="portal-brand" href="/" aria-label="Phoenix UOS home"><img src={mark} alt="" /><span><strong>PHOENIX UOS</strong><small>LIVING INFRASTRUCTURE PORTAL</small></span></a><div className="portal-top-actions"><span className={`portal-connection ${configured ? "ready" : ""}`}>{configured ? t.configured : t.notConfigured}</span><a className="portal-home-link" href="/">{t.home} ↗</a><div className="portal-language-picker" aria-label="Select language">{locales.map((item) => <button key={item} type="button" aria-pressed={locale === item} onClick={() => chooseLocale(item)} title={copy[item].home}>{item.toUpperCase()}</button>)}</div></div></header>
    <div className="portal-main">
      <section className="portal-intro" aria-labelledby="portal-title"><div className="portal-intro-copy"><p className="portal-kicker">{t.label}</p><h1 id="portal-title">{t.title[0]}<span>{t.title[1]}</span></h1><p>{t.intro}</p></div><aside className="portal-stage-card"><span>{t.signedIn}</span><strong>{accountLabel}</strong><p>{t.notice}</p></aside></section>
      <div className="portal-layout"><aside className="portal-sidebar"><span className="portal-sidebar-label">PORTAL NAVIGATION</span><nav className="portal-tabs" aria-label="Portal navigation">{availableTabs.map((item, index) => <button key={item} type="button" aria-selected={tab === item} onClick={() => setTab(item)}><span>{t.nav[item]}</span><span>{String(index + 1).padStart(2, "0")}</span></button>)}</nav><p className="portal-disclaimer">{t.notice}</p></aside>
        <section className="portal-view" aria-live="polite"><div className="portal-view-heading"><h2>{t.views[tab][0]}</h2><p>{t.views[tab][1]}</p></div>
          {feedback && <div className="portal-feedback" role="status">{feedback}</div>}
          {tab === "overview" && <Overview t={t} user={user} profile={profile} contributions={contributions} entitlements={entitlements} configured={configured} />}
          {tab === "ledger" && <Ledger t={t} user={user} profile={profile} projects={projects} contributions={contributions} form={form} setForm={setForm} onSubmit={submitContribution} loading={loading} />}
          {tab === "projects" && <Projects projects={projects} />}
          {tab === "access" && <Access t={t} user={user} entitlements={entitlements} />}
          {tab === "account" && <Account t={t} user={user} profile={profile} email={email} setEmail={setEmail} onLogin={sendMagicLink} onSignOut={signOut} loading={loading} configured={configured} />}
          {tab === "review" && <Review t={t} queue={reviewQueue} projects={projects} notes={reviewNotes} setNotes={setReviewNotes} onDecision={recordDecision} loading={loading} />}
        </section>
      </div>
    </div>
    <footer className="portal-footer">{t.notice} <a href="mailto:contact@phoenix-uos.com">contact@phoenix-uos.com</a></footer>
  </main>;
}

function Overview({ t, user, profile, contributions, entitlements, configured }: { t: typeof copy[Locale]; user: User | null; profile: PortalProfile | null; contributions: Contribution[]; entitlements: Entitlement[]; configured: boolean }) {
  const status = user ? (profile?.status ?? "pending") : "—";
  return <><div className="portal-grid metrics"><article className="portal-card"><span className="portal-card-label">ACCOUNT STATUS</span><strong className="portal-metric">{status}</strong><p className="portal-card-copy">{user?.email ?? t.login}</p></article><article className="portal-card"><span className="portal-card-label">CONTRIBUTIONS</span><strong className="portal-metric">{user ? contributions.length : "—"}</strong><p className="portal-card-copy">{t.views.ledger[1]}</p></article><article className="portal-card"><span className="portal-card-label">SERVICE ACCESS</span><strong className="portal-metric">{user ? entitlements.filter((item) => item.status === "active").length : "—"}</strong><p className="portal-card-copy">{t.views.access[1]}</p></article></div><div className="portal-feature-grid"><article className="portal-project"><div className="portal-project-content"><span className="portal-project-code">PHX / FIELD UNIT 01</span><h3>20 Homes Pilot</h3><p>{t.views.projects[1]}</p></div></article><article className="portal-card"><span className="portal-card-label">SYSTEM BOUNDARY</span><div className="portal-empty"><div><strong>{configured ? (user ? t.signedIn : t.login) : t.notConfigured}</strong><p>{t.notice}</p></div></div></article></div></>;
}

function Ledger({ t, user, profile, projects, contributions, form, setForm, onSubmit, loading }: { t: typeof copy[Locale]; user: User | null; profile: PortalProfile | null; projects: PortalProject[]; contributions: Contribution[]; form: { projectId: string; category: string; description: string }; setForm: (value: { projectId: string; category: string; description: string }) => void; onSubmit: (event: FormEvent) => void; loading: boolean }) {
  if (!user) return <AccountPrompt t={t} />;
  return <><article className="portal-card"><span className="portal-card-label">{t.submitTitle}</span><form className="portal-form" onSubmit={onSubmit}><label>{t.project}<select required value={form.projectId} onChange={(event) => setForm({ ...form, projectId: event.target.value })}>{projects.map((project) => <option key={project.id} value={project.id}>{project.name}</option>)}</select></label><label>{t.category}<select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>{categoryOptions.map((category) => <option key={category} value={category}>{category}</option>)}</select></label><label className="portal-form-full">{t.description}<textarea required minLength={20} maxLength={4000} value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} placeholder={t.formHint} /></label><p className="portal-form-hint">{profile?.status === "active" ? t.formHint : t.errors.inactive}</p><button className="portal-cta" type="submit" disabled={loading || profile?.status !== "active" || !projects.length}>{loading ? t.submitting : t.submit}</button></form></article><ContributionList t={t} contributions={contributions} projects={projects} /></>;
}

function ContributionList({ t, contributions, projects }: { t: typeof copy[Locale]; contributions: Contribution[]; projects: PortalProject[] }) { return <article className="portal-card" style={{ marginTop: 14 }}><span className="portal-card-label">VERIFICATION RECORD</span>{contributions.length ? <ul className="portal-record-list">{contributions.map((item) => <li key={item.id}><time>{new Date(item.submitted_at).toLocaleDateString()}</time><span><b>{projects.find((project) => project.id === item.project_id)?.name ?? "Project"}</b><small>{item.category}</small></span><b className="portal-status">{item.status}</b></li>)}</ul> : <div className="portal-empty"><div><strong>{t.noRecords}</strong></div></div>}</article>; }

function Projects({ projects }: { projects: PortalProject[] }) { return <div className="portal-access-grid">{projects.map((project) => <article className="portal-access-card" key={project.id}><span>{project.code}</span><strong>{project.name}</strong><p>{project.region_label ?? "Phoenix UOS"} · {project.status}</p></article>)}</div>; }

function Access({ t, user, entitlements }: { t: typeof copy[Locale]; user: User | null; entitlements: Entitlement[] }) { if (!user) return <AccountPrompt t={t} />; return entitlements.length ? <div className="portal-access-grid">{entitlements.map((item) => <article className="portal-access-card" key={item.id}><span>{item.status.toUpperCase()}</span><strong>{item.entitlement_key.replaceAll("_", " ")}</strong><p>{item.valid_until ? new Date(item.valid_until).toLocaleDateString() : "Active"}</p></article>)}</div> : <div className="portal-empty"><div><strong>{t.noAccess}</strong><p>{t.views.access[1]}</p></div></div>; }

function Account({ t, user, profile, email, setEmail, onLogin, onSignOut, loading, configured }: { t: typeof copy[Locale]; user: User | null; profile: PortalProfile | null; email: string; setEmail: (value: string) => void; onLogin: (event: FormEvent) => void; onSignOut: () => void; loading: boolean; configured: boolean }) { return <><div className="portal-security"><article className="portal-card"><span className="portal-card-label">SECURITY BOUNDARY</span><strong>{t.security[0]}</strong><p className="portal-card-copy">{t.security[1]}</p></article><article className="portal-card"><span className="portal-card-label">PRODUCT BOUNDARY</span><strong>{t.boundary[0]}</strong><p className="portal-card-copy">{t.boundary[1]}</p></article></div><article className="portal-card" style={{ marginTop: 14 }}>{user ? <div className="portal-account-state"><div><span className="portal-card-label">{t.signedIn}</span><strong>{profile?.display_name || user.email}</strong><p className="portal-card-copy">{profile?.role ?? "participant"} · {profile?.status ?? "pending"}</p><p className="portal-account-privacy">{t.privacy}</p></div><button className="portal-cta outline" type="button" onClick={onSignOut}>{t.signOut}</button></div> : <form className="portal-login" onSubmit={onLogin}><div><span className="portal-card-label">{configured ? t.configured : t.notConfigured}</span><strong>{t.login}</strong><p className="portal-card-copy">{t.privacy}</p></div><label>{t.email}<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" disabled={!configured || loading} /></label><button className="portal-cta" type="submit" disabled={!configured || loading}>{loading ? "…" : t.send}</button></form>}</article></>; }

function Review({ t, queue, projects, notes, setNotes, onDecision, loading }: { t: typeof copy[Locale]; queue: Contribution[]; projects: PortalProject[]; notes: Record<string, string>; setNotes: (value: Record<string, string>) => void; onDecision: (id: string, decision: "approved" | "rejected" | "changes_requested") => void; loading: boolean }) { return queue.length ? <div className="portal-review-list">{queue.map((item) => <article className="portal-card" key={item.id}><span className="portal-card-label">{projects.find((project) => project.id === item.project_id)?.name ?? "Project"} · {item.category}</span><p className="portal-review-description">{item.description}</p><label className="portal-review-note">{t.note}<textarea minLength={5} value={notes[item.id] ?? ""} onChange={(event) => setNotes({ ...notes, [item.id]: event.target.value })} /></label><div className="portal-decision-actions"><button disabled={loading} type="button" onClick={() => onDecision(item.id, "approved")}>{t.approve}</button><button disabled={loading} type="button" onClick={() => onDecision(item.id, "changes_requested")}>{t.changes}</button><button disabled={loading} type="button" onClick={() => onDecision(item.id, "rejected")}>{t.reject}</button></div></article>)}</div> : <div className="portal-empty"><div><strong>{t.noReviews}</strong></div></div>; }

function AccountPrompt({ t }: { t: typeof copy[Locale] }) { return <div className="portal-empty"><div><strong>{t.login}</strong><p>{t.views.account[1]}</p></div></div>; }
