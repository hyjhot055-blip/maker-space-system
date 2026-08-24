const STORAGE_KEY = "licheng-space-mvp-v1";

const seedState = {
  currentPage: "dashboard",
  currentRole: "space-admin",
  peopleView: "people",
  people: [
    { id: 1, name: "陈嘉禾", phone: "138****6217", company: "泉州云帆科技", department: "产品部", role: "产品经理", area: "A-05", status: "在场", access: "已授权", credential: "人脸 / 门禁卡" },
    { id: 2, name: "林知夏", phone: "159****0832", company: "刺桐文创", department: "设计部", role: "视觉设计", area: "B-12", status: "离场", access: "已授权", credential: "人脸" },
    { id: 3, name: "周远航", phone: "186****4190", company: "海丝智造", department: "研发部", role: "工程师", area: "C-03", status: "在场", access: "待处理", credential: "待录入" },
    { id: 4, name: "许安然", phone: "177****2305", company: "泉州云帆科技", department: "运营部", role: "运营主管", area: "A-08", status: "在场", access: "已授权", credential: "门禁卡" },
    { id: 5, name: "郭慕言", phone: "135****9174", company: "闽南数联", department: "商务部", role: "商务经理", area: "D-06", status: "离场", access: "已授权", credential: "人脸 / 门禁卡" },
    { id: 6, name: "苏若川", phone: "189****5528", company: "刺桐文创", department: "策划部", role: "策划", area: "B-16", status: "离场", access: "待注销", credential: "人脸" }
  ],
  companies: [
    { id: 1, name: "泉州云帆科技", short: "YF", leader: "陈嘉禾", phone: "138****6217", area: "A区 · 12席", people: 14, seats: 12, expiry: "2027-03-31", status: "正常", color: "#42789e" },
    { id: 2, name: "刺桐文创", short: "ZT", leader: "林知夏", phone: "159****0832", area: "B区 · 16席", people: 11, seats: 16, expiry: "2026-12-31", status: "正常", color: "#b57b32" },
    { id: 3, name: "海丝智造", short: "HS", leader: "周远航", phone: "186****4190", area: "C区 · 10席", people: 9, seats: 10, expiry: "2027-06-30", status: "正常", color: "#538778" },
    { id: 4, name: "闽南数联", short: "MN", leader: "郭慕言", phone: "135****9174", area: "D区 · 8席", people: 7, seats: 8, expiry: "2026-10-31", status: "即将到期", color: "#8a6575" }
  ],
  accessTasks: [
    { id: 1, person: "周远航", company: "海丝智造", type: "新增授权", scope: "5F东门 / C区", valid: "2026-08-18 至 2027-06-30", status: "待处理", created: "今天 09:36" },
    { id: 2, person: "苏若川", company: "刺桐文创", type: "权限注销", scope: "5F全部区域", valid: "立即生效", status: "待处理", created: "今天 08:52" },
    { id: 3, person: "张欣怡", company: "外部访客 · 星瀚咨询", type: "临时门禁", scope: "5F东门 / M02", valid: "08-20 13:30 至 17:30", status: "待审批", created: "昨天 17:21" },
    { id: 4, person: "许安然", company: "泉州云帆科技", type: "区域变更", scope: "5F东门 / A区", valid: "长期", status: "已处理", created: "08-17 11:09" }
  ],
  notices: [
    { id: 1, type: "安全警示", level: "紧急", title: "关于本周五消防疏散演练的通知", content: "本周五下午 15:00 开展全楼层消防疏散演练，请各企业提前安排工作并准时参加。", target: "全体人员", channel: "微信 + 邮件", confirmed: 41, total: 48, date: "2026-08-18", icon: "安" },
    { id: 2, type: "培训活动", level: "重要", title: "创业企业财税合规专题培训报名", content: "本期邀请专业财税顾问进行政策解读，会议室 M01，席位有限。", target: "企业管理员", channel: "微信", confirmed: 4, total: 6, date: "2026-08-17", icon: "训" },
    { id: 3, type: "日常办公", level: "普通", title: "共享打印设备维护完成", content: "西侧公共打印区设备已恢复使用，如有异常请联系前台运营人员。", target: "全体人员", channel: "邮件", confirmed: 48, total: 48, date: "2026-08-16", icon: "办" }
  ],
  rooms: [
    { id: 1, code: "M01", name: "刺桐厅", capacity: 18, amenities: "投影 · 视频会议", booked: ["10:00", "11:00", "15:00"] },
    { id: 2, code: "M02", name: "海丝厅", capacity: 10, amenities: "大屏 · 白板", booked: ["09:00", "14:00", "15:00", "16:00"] },
    { id: 3, code: "M03", name: "清源小会室", capacity: 6, amenities: "电视 · 白板", booked: ["11:00", "13:00"] }
  ],
  bookings: [
    { id: 1, room: "刺桐厅", company: "泉州云帆科技", contact: "陈嘉禾", date: "2026-08-18", start: "10:00", end: "12:00", status: "使用中", external: false },
    { id: 2, room: "海丝厅", company: "星瀚咨询（外部）", contact: "张欣怡", date: "2026-08-20", start: "14:00", end: "17:00", status: "待审批", external: true }
  ],
  resources: [
    { id: 1, code: "O-501", name: "临窗独立办公室", type: "private", capacity: 4, price: 320, unit: "天", status: "可预约", description: "南向采光，适合小型项目组短期进驻。", amenities: ["高速网络", "4人桌", "文件柜"] },
    { id: 2, code: "D-18", name: "共享开放工位", type: "desk", capacity: 1, price: 48, unit: "天", status: "剩余 6 席", description: "灵活开放工位，含公共休息区使用权。", amenities: ["人体工学椅", "储物柜", "打印"] },
    { id: 3, code: "S-02", name: "商务套间", type: "suite", capacity: 8, price: 680, unit: "天", status: "可预约", description: "独立会客区与办公区，适合商务团队。", amenities: ["会客区", "8人席", "独立空调"] }
  ],
  orders: [
    { id: "LC20260818001", customer: "星瀚咨询", item: "海丝厅 · 3小时", amount: 360, method: "微信支付", status: "已支付", date: "2026-08-18 10:24" },
    { id: "LC20260817006", customer: "海川设计工作室", item: "共享开放工位 · 5天", amount: 240, method: "线下转账", status: "待确认", date: "2026-08-17 16:40" },
    { id: "LC20260816003", customer: "锐途贸易", item: "临窗独立办公室 · 2天", amount: 640, method: "微信支付", status: "已支付", date: "2026-08-16 09:18" },
    { id: "LC20260815002", customer: "南音文化", item: "商务套间 · 1天", amount: 680, method: "线下POS", status: "已退款", date: "2026-08-15 14:07" }
  ]
};

let state = loadState();
const pageTitles = { dashboard: "运营总览", people: "企业与人员", access: "门禁管理", notices: "通知中心", meetings: "会议室预约", coworking: "共享办公", orders: "订单与支付", virtual: "虚拟空间", screen: "数据大屏", settings: "系统设置" };
const roleLabels = { "space-admin": "鲤城空间管理员", "company-admin": "入驻企业管理员", operator: "前台运营人员", executive: "管理层" };
const appContent = document.getElementById("appContent");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalContent = document.getElementById("modalContent");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...seedState, ...saved } : structuredClone(seedState);
  } catch { return structuredClone(seedState); }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); updateBadges(); }
function uid() { return Date.now() + Math.floor(Math.random() * 1000); }
function escapeHtml(value = "") { return String(value).replace(/[&<>'"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c])); }
function statusClass(status) {
  if (["正常", "已授权", "已处理", "已支付", "已确认", "使用中", "可预约"].includes(status)) return "success";
  if (["待处理", "待确认", "即将到期", "待审批"].includes(status)) return "warning";
  if (["已退款", "离场", "已注销"].includes(status)) return "muted";
  if (["待注销", "异常", "退款中"].includes(status)) return "danger";
  return "info";
}
function badge(status) { return `<span class="status-badge ${statusClass(status)}">${escapeHtml(status)}</span>`; }
function visiblePeople() { return state.currentRole === "company-admin" ? state.people.filter(p => p.company === "泉州云帆科技") : state.people; }
function visibleCompanies() { return state.currentRole === "company-admin" ? state.companies.filter(c => c.name === "泉州云帆科技") : state.companies; }
function visibleAccessTasks() { return state.currentRole === "company-admin" ? state.accessTasks.filter(t => t.company === "泉州云帆科技") : state.accessTasks; }
function toast(title, detail = "操作已成功保存") {
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<b>${escapeHtml(title)}</b><small>${escapeHtml(detail)}</small>`;
  document.getElementById("toastStack").appendChild(el);
  setTimeout(() => el.remove(), 3200);
}
function updateBadges() {
  document.getElementById("peopleBadge").textContent = visiblePeople().length;
  document.getElementById("accessBadge").textContent = visibleAccessTasks().filter(t => ["待处理", "待审批"].includes(t.status)).length;
}
function openModal(html) { modalContent.innerHTML = html; modalBackdrop.hidden = false; document.body.style.overflow = "hidden"; setTimeout(() => modalContent.querySelector("input, select, textarea")?.focus(), 30); }
function closeModal() { modalBackdrop.hidden = true; modalContent.innerHTML = ""; document.body.style.overflow = ""; }
function metricCard(index, icon, value, label, trend, down = false) { return `<article class="metric-card" data-index="${index}"><div class="metric-icon">${icon}</div><span class="metric-trend ${down ? "down" : ""}">${trend}</span><strong class="metric-value">${value}</strong><span class="metric-label">${label}</span></article>`; }

function navigate(page) {
  state.currentPage = page;
  saveState();
  document.querySelectorAll(".nav-item").forEach(btn => btn.classList.toggle("active", btn.dataset.page === page));
  document.getElementById("pageTitle").textContent = pageTitles[page];
  document.getElementById("sidebar").classList.remove("open");
  render();
}

function render() {
  const renderers = { dashboard: renderDashboard, people: renderPeople, access: renderAccess, notices: renderNotices, meetings: renderMeetings, coworking: renderCoworking, orders: renderOrders, virtual: renderVirtual, screen: renderScreen, settings: renderSettings };
  appContent.innerHTML = `<div class="page-enter">${renderers[state.currentPage]()}</div>`;
  bindPageEvents();
  updateBadges();
}

function renderDashboard() {
  const dashboardPeople = visiblePeople();
  const dashboardCompanies = visibleCompanies();
  const pendingAccess = visibleAccessTasks().filter(t => ["待处理", "待审批"].includes(t.status)).length;
  const revenue = state.orders.filter(o => o.status === "已支付").reduce((sum, o) => sum + o.amount, 0);
  return `
    <div class="hero-grid">
      <article class="hero-card">
        <span class="eyebrow" style="color:#f2b63d">TUESDAY · 18 AUG 2026</span>
        <h2>下午好，林经理。<br>空间正在有序运转。</h2>
        <p>今天有 3 场会议、1 个外部团队到访，消防演练通知还有 7 人尚未确认。</p>
        <div class="hero-actions"><button class="primary-btn" data-action="quick-book">快速预约</button><button class="secondary-btn" data-nav="screen">查看数据大屏</button></div>
      </article>
      <article class="status-panel">
        <div class="panel-top"><div><span class="eyebrow">SPACE PULSE</span><h3>实时空间状态</h3></div><span class="live-tag"><i class="pulse-dot" style="width:6px;height:6px"></i>运行中</span></div>
        <div class="utilization-body">
          <div class="util-ring"><div><strong>76%</strong><small>综合利用率</small></div></div>
          <div class="util-list"><div><span>当前在场</span><b>32 / 48</b></div><div><span>会议室使用</span><b>2 / 3</b></div><div><span>共享工位</span><b>14 / 20</b></div></div>
        </div>
      </article>
    </div>
    <div class="metric-grid">
      ${metricCard("01", "企", dashboardCompanies.length, "在驻企业", state.currentRole === "company-admin" ? "本企业视图" : "+1 本季度")}
      ${metricCard("02", "人", dashboardPeople.length, "登记人员", `${dashboardPeople.filter(p=>p.status === "在场").length} 人在场`)}
      ${metricCard("03", "门", pendingAccess, "门禁待办", pendingAccess ? "需要处理" : "全部完成", !!pendingAccess)}
      ${metricCard("04", "¥", `¥${revenue.toLocaleString()}`, "本月场地收入", "+12.6%")}
    </div>
    <div class="dashboard-grid">
      <article class="section-card">
        <div class="panel-top"><div><span class="eyebrow">7 DAY TREND</span><h3>空间使用趋势</h3></div><span class="subtle">单位：人次</span></div>
        <div class="chart-wrap">
          <svg viewBox="0 0 680 230" preserveAspectRatio="none" aria-label="空间使用趋势折线图">
            <defs><linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4c87b8" stop-opacity=".3"/><stop offset="1" stop-color="#4c87b8" stop-opacity="0"/></linearGradient></defs>
            <line class="chart-grid-line" x1="0" x2="680" y1="40" y2="40"/><line class="chart-grid-line" x1="0" x2="680" y1="100" y2="100"/><line class="chart-grid-line" x1="0" x2="680" y1="160" y2="160"/><line class="chart-grid-line" x1="0" x2="680" y1="215" y2="215"/>
            <path class="chart-area" d="M0,165 C80,145 75,115 115,122 S180,151 225,108 S300,73 340,92 S415,135 455,78 S530,39 565,65 S635,103 680,48 L680,215 L0,215Z"/>
            <path class="chart-line" d="M0,165 C80,145 75,115 115,122 S180,151 225,108 S300,73 340,92 S415,135 455,78 S530,39 565,65 S635,103 680,48"/>
            <circle class="chart-dot" cx="0" cy="165" r="5"/><circle class="chart-dot" cx="115" cy="122" r="5"/><circle class="chart-dot" cx="225" cy="108" r="5"/><circle class="chart-dot" cx="340" cy="92" r="5"/><circle class="chart-dot" cx="455" cy="78" r="5"/><circle class="chart-dot" cx="565" cy="65" r="5"/><circle class="chart-dot" cx="680" cy="48" r="5"/>
          </svg>
        </div>
        <div class="floor-strip"><div class="floor-unit active"><strong>A 区</strong><small>12 / 12 使用中</small></div><div class="floor-unit"><strong>B 区</strong><small>11 / 16 使用中</small></div><div class="floor-unit busy"><strong>C 区</strong><small>9 / 10 使用中</small></div><div class="floor-unit"><strong>D 区</strong><small>7 / 8 使用中</small></div><div class="floor-unit"><strong>共享区</strong><small>14 / 20 使用中</small></div></div>
      </article>
      <article class="section-card">
        <div class="panel-top"><div><span class="eyebrow">LIVE FEED</span><h3>今日动态</h3></div><button class="text-btn" data-nav="access">全部记录</button></div>
        <div class="activity-list">
          <div class="activity-item"><span class="activity-symbol">门</span><p><b>外部访客门禁待审批</b>星瀚咨询 · 张欣怡</p><time>10分钟前</time></div>
          <div class="activity-item"><span class="activity-symbol">¥</span><p><b>收到线上场地付款 ¥360</b>海丝厅 · 3小时</p><time>42分钟前</time></div>
          <div class="activity-item"><span class="activity-symbol">人</span><p><b>海丝智造新增 1 名员工</b>周远航 · C区</p><time>1小时前</time></div>
          <div class="activity-item"><span class="activity-symbol">告</span><p><b>消防演练通知确认率 85%</b>仍有 7 人未确认</p><time>2小时前</time></div>
        </div>
      </article>
    </div>`;
}

function renderPeople() {
  const isPeople = state.peopleView === "people";
  return `
    <div class="page-tools"><div><span class="eyebrow">TENANT DIRECTORY</span><h2>企业与人员档案</h2><p>统一掌握入驻企业、人员资料及办公区域分布。</p></div><div class="tool-actions"><button class="secondary-btn" data-action="export-people">导出清单</button><button class="primary-btn" data-action="${isPeople ? "add-person" : "add-company"}">＋ ${isPeople ? "新增人员" : "新增企业"}</button></div></div>
    <div class="filters"><div class="segmented"><button class="${isPeople ? "active" : ""}" data-people-view="people">人员档案</button><button class="${!isPeople ? "active" : ""}" data-people-view="companies">入驻企业</button></div>${isPeople ? `<input class="filter-input" id="peopleFilter" placeholder="搜索姓名、企业、部门"><select class="filter-select" id="statusFilter"><option value="">全部状态</option><option>在场</option><option>离场</option></select>` : ""}</div>
    ${isPeople ? renderPeopleTable(visiblePeople()) : renderCompanyGrid()}`;
}
function renderPeopleTable(people) {
  return `<article class="section-card flush"><div class="table-wrap"><table class="data-table"><thead><tr><th>人员</th><th>所属企业 / 部门</th><th>办公区域</th><th>在场状态</th><th>门禁权限</th><th>凭证类型</th><th>操作</th></tr></thead><tbody id="peopleTableBody">${people.map(p => `<tr><td><div class="person-cell"><span class="mini-avatar">${escapeHtml(p.name[0])}</span><div><b>${escapeHtml(p.name)}</b><small>${escapeHtml(p.phone)}</small></div></div></td><td><b>${escapeHtml(p.company)}</b><br><small class="subtle">${escapeHtml(p.department)} · ${escapeHtml(p.role)}</small></td><td>${escapeHtml(p.area)}</td><td>${badge(p.status)}</td><td>${badge(p.access)}</td><td>${escapeHtml(p.credential)}</td><td><div class="row-actions"><button class="text-btn" data-action="edit-person" data-id="${p.id}">编辑</button><button class="text-btn" data-action="person-access" data-id="${p.id}">门禁</button><button class="danger-btn" data-action="delete-person" data-id="${p.id}">移除</button></div></td></tr>`).join("") || `<tr><td colspan="7"><div class="empty-state"><b>没有匹配的人员</b><p>请调整搜索条件后重试。</p></div></td></tr>`}</tbody></table></div></article>`;
}
function renderCompanyGrid() {
  return `<div class="company-grid">${visibleCompanies().map(c => `<article class="company-card" style="--company-color:${c.color}"><div class="company-head"><span class="company-logo">${escapeHtml(c.short)}</span><div><h3>${escapeHtml(c.name)}</h3><small>负责人：${escapeHtml(c.leader)}</small></div></div><div class="company-data"><div><b>${c.people}</b><small>登记人员</small></div><div><b>${c.seats}</b><small>租赁席位</small></div><div><b>${Math.min(100, Math.round(c.people / c.seats * 100))}%</b><small>席位使用</small></div></div><div class="company-foot"><span>${escapeHtml(c.area)} · 至 ${escapeHtml(c.expiry)}</span><div>${badge(c.status)} <button class="text-btn" data-action="edit-company" data-id="${c.id}">编辑</button></div></div></article>`).join("")}</div>`;
}

function renderAccess() {
  const tasks = visibleAccessTasks();
  const pending = tasks.filter(t => ["待处理", "待审批"].includes(t.status)).length;
  return `
    <div class="page-tools"><div><span class="eyebrow">ACCESS CONTROL</span><h2>门禁授权工作台</h2><p>现阶段通过任务清单完成人工授权，已为后续设备接口预留能力。</p></div><div class="tool-actions"><button class="secondary-btn" data-action="export-access">导出待办清单</button><button class="primary-btn" data-action="add-access">＋ 新建门禁申请</button></div></div>
    <div class="summary-row"><div class="summary-chip"><span>待处理任务</span><strong>${pending}</strong></div><div class="summary-chip"><span>今日已处理</span><strong>${tasks.filter(t => t.status === "已处理").length}</strong></div><div class="summary-chip"><span>当前有效权限</span><strong>${visiblePeople().filter(p => p.access === "已授权").length}</strong></div><div class="summary-chip"><span>接口状态</span><strong style="font-size:16px;color:#b87506">离线模式</strong></div></div>
    <div class="access-layout">
      <article class="section-card flush"><div class="table-wrap"><table class="data-table"><thead><tr><th>申请人员</th><th>申请类型</th><th>通行范围</th><th>有效时间</th><th>状态</th><th>操作</th></tr></thead><tbody>${tasks.map(t => `<tr><td><div class="person-cell"><span class="mini-avatar">${escapeHtml(t.person[0])}</span><div><b>${escapeHtml(t.person)}</b><small>${escapeHtml(t.company)} · ${escapeHtml(t.created)}</small></div></div></td><td>${escapeHtml(t.type)}</td><td>${escapeHtml(t.scope)}</td><td>${escapeHtml(t.valid)}</td><td>${badge(t.status)}</td><td><div class="row-actions">${t.status !== "已处理" ? `<button class="primary-btn" data-action="approve-access" data-id="${t.id}">${t.status === "待审批" ? "审批" : "标记完成"}</button>` : `<button class="text-btn" data-action="view-access" data-id="${t.id}">查看记录</button>`}</div></td></tr>`).join("")}</tbody></table></div></article>
      <aside class="integration-card"><div class="integration-icon">⇄</div><span class="eyebrow" style="color:#f2b63d;margin-top:18px">RESERVED ADAPTER</span><h3>门禁接口适配器</h3><p>当前设备不支持网络接口。系统保存授权任务、通行范围和凭证编号，支持导出后在原门禁软件中操作。</p><ol class="flow-list"><li>审批人员或访客权限</li><li>生成门禁授权任务清单</li><li>管理员在线下设备中配置</li><li>回到系统标记处理结果</li></ol><button class="secondary-btn" data-action="integration-info">查看预留字段</button></aside>
    </div>`;
}

function renderNotices() {
  return `
    <div class="page-tools"><div><span class="eyebrow">MESSAGE & RECEIPT</span><h2>通知与确认回执</h2><p>通过微信或邮件触达，清晰追踪每一条通知的查看与确认状态。</p></div><div class="tool-actions"><button class="secondary-btn" data-action="remind-notices">提醒未确认人员</button><button class="primary-btn" data-action="add-notice">＋ 发布通知</button></div></div>
    <div class="summary-row"><div class="summary-chip"><span>本月已发布</span><strong>${state.notices.length}</strong></div><div class="summary-chip"><span>平均确认率</span><strong>${Math.round(state.notices.reduce((s,n)=>s+n.confirmed/n.total,0)/state.notices.length*100)}%</strong></div><div class="summary-chip"><span>等待确认</span><strong>${state.notices.reduce((s,n)=>s+n.total-n.confirmed,0)}</strong></div><div class="summary-chip"><span>发送失败</span><strong>0</strong></div></div>
    <div class="notice-grid">${state.notices.map(n => { const pct = Math.round(n.confirmed / n.total * 100); return `<article class="notice-card"><div class="notice-type"><i>${n.icon}</i>${badge(n.level === "紧急" ? "待确认" : n.level)}</div><h3>${escapeHtml(n.title)}</h3><p>${escapeHtml(n.content)}</p><div class="notice-progress"><div class="progress-line"><i style="width:${pct}%"></i></div><div class="progress-meta"><span>${escapeHtml(n.channel)} · ${escapeHtml(n.target)}</span><b>${n.confirmed}/${n.total} 已确认 · ${pct}%</b></div><button class="text-btn" style="margin-top:9px;padding-left:0" data-action="notice-detail" data-id="${n.id}">查看回执明细 →</button></div></article>`; }).join("")}</div>`;
}

function renderMeetings() {
  const times = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
  return `
    <div class="page-tools"><div><span class="eyebrow">ROOM BOOKING</span><h2>会议室预约</h2><p>内部企业免费使用，外部预约可配置收费并进入审批流程。</p></div><div class="tool-actions"><button class="secondary-btn" data-action="booking-list">预约记录</button><button class="primary-btn" data-action="book-room">＋ 预约会议室</button></div></div>
    <div class="date-strip">${[18,19,20,21,22,23,24].map((d,i)=>`<div class="date-item ${i===0?"active":""}"><span>${["今天","周三","周四","周五","周六","周日","周一"][i]}</span><b>${d}</b><span>8月</span></div>`).join("")}</div>
    <div class="room-list">${state.rooms.map(room => `<article class="room-row"><div class="room-info"><span class="room-code">${room.code}</span><div><h3>${escapeHtml(room.name)}</h3><small>${room.capacity} 人 · ${escapeHtml(room.amenities)}</small></div></div><div class="time-slots">${times.map(t => `<span class="time-slot ${room.booked.includes(t) ? "booked" : ""}">${t}</span>`).join("")}</div><button class="secondary-btn" data-action="book-specific-room" data-id="${room.id}">预约</button></article>`).join("")}</div>
    <article class="section-card" style="margin-top:16px"><div class="panel-top"><h3>今日预约</h3><span class="subtle">${state.bookings.filter(b=>b.date === "2026-08-18").length} 条记录</span></div><div class="table-wrap"><table class="data-table"><thead><tr><th>会议室</th><th>预约单位</th><th>联系人</th><th>使用时间</th><th>类型</th><th>状态</th></tr></thead><tbody>${state.bookings.map(b=>`<tr><td><b>${escapeHtml(b.room)}</b></td><td>${escapeHtml(b.company)}</td><td>${escapeHtml(b.contact)}</td><td>${escapeHtml(b.date)} ${escapeHtml(b.start)}–${escapeHtml(b.end)}</td><td>${b.external?"外部收费":"内部免费"}</td><td>${badge(b.status)}</td></tr>`).join("")}</tbody></table></div></article>`;
}

function renderCoworking() {
  return `
    <div class="page-tools"><div><span class="eyebrow">FLEXIBLE WORKSPACE</span><h2>共享办公预约</h2><p>向外部团队开放灵活办公资源，提升场地使用率与运营收益。</p></div><div class="tool-actions"><button class="secondary-btn" data-action="manage-resources">资源管理</button><button class="primary-btn" data-action="external-booking">＋ 新建外部预约</button></div></div>
    <div class="filters"><input class="filter-input" placeholder="搜索场地或设施"><select class="filter-select"><option>全部资源</option><option>独立办公室</option><option>开放工位</option><option>商务套间</option></select><select class="filter-select"><option>今天可用</option><option>本周可用</option></select></div>
    <div class="resource-grid">${state.resources.map(r=>`<article class="resource-card"><div class="resource-visual ${r.type}" data-code="${r.code}"></div><div class="resource-body"><div class="resource-title"><h3>${escapeHtml(r.name)}</h3><b>¥${r.price}<small style="font:9px sans-serif;color:#777">/${r.unit}</small></b></div><p>${escapeHtml(r.description)}</p><div class="amenity-list">${r.amenities.map(a=>`<span>${escapeHtml(a)}</span>`).join("")}</div><div class="resource-foot">${badge(r.status)}<button class="primary-btn" data-action="book-resource" data-id="${r.id}">立即预约</button></div></div></article>`).join("")}</div>
    <article class="section-card" style="margin-top:16px"><div class="panel-top"><div><span class="eyebrow">BOOKING FLOW</span><h3>外部预约流程</h3></div><span class="soft-tag" style="background:#e8f2f8;color:#2e6386">线上 + 线下支付</span></div><div class="floor-strip"><div class="floor-unit"><strong>01 提交</strong><small>选择空间与时间</small></div><div class="floor-unit"><strong>02 审核</strong><small>运营人员确认</small></div><div class="floor-unit busy"><strong>03 支付</strong><small>线上或线下付款</small></div><div class="floor-unit"><strong>04 门禁</strong><small>临时权限审批</small></div><div class="floor-unit active"><strong>05 使用</strong><small>签到与到期撤权</small></div></div></article>`;
}

function renderOrders() {
  const paid = state.orders.filter(o=>o.status === "已支付").reduce((s,o)=>s+o.amount,0);
  return `
    <div class="page-tools"><div><span class="eyebrow">PAYMENT LEDGER</span><h2>订单与支付</h2><p>统一记录线上支付、线下收款、退款及开票状态。</p></div><div class="tool-actions"><button class="secondary-btn" data-action="export-orders">导出流水</button><button class="primary-btn" data-action="add-order">＋ 登记线下收款</button></div></div>
    <div class="summary-row"><div class="summary-chip"><span>本月已收</span><strong>¥${paid.toLocaleString()}</strong></div><div class="summary-chip"><span>待确认收款</span><strong>¥${state.orders.filter(o=>o.status === "待确认").reduce((s,o)=>s+o.amount,0)}</strong></div><div class="summary-chip"><span>线上支付</span><strong>${state.orders.filter(o=>o.method.includes("微信")).length} 笔</strong></div><div class="summary-chip"><span>已退款</span><strong>¥${state.orders.filter(o=>o.status === "已退款").reduce((s,o)=>s+o.amount,0)}</strong></div></div>
    <article class="section-card flush"><div class="table-wrap"><table class="data-table"><thead><tr><th>订单编号</th><th>客户</th><th>预约项目</th><th>金额</th><th>支付方式</th><th>创建时间</th><th>状态</th><th>操作</th></tr></thead><tbody>${state.orders.map(o=>`<tr><td><b>${escapeHtml(o.id)}</b></td><td>${escapeHtml(o.customer)}</td><td>${escapeHtml(o.item)}</td><td><b>¥${o.amount.toLocaleString()}</b></td><td>${escapeHtml(o.method)}</td><td>${escapeHtml(o.date)}</td><td>${badge(o.status)}</td><td><div class="row-actions">${o.status === "待确认" ? `<button class="primary-btn" data-action="confirm-payment" data-id="${o.id}">确认收款</button>` : `<button class="text-btn" data-action="order-detail" data-id="${o.id}">详情</button>`}${o.status === "已支付" ? `<button class="danger-btn" data-action="refund-order" data-id="${o.id}">退款</button>` : ""}</div></td></tr>`).join("")}</tbody></table></div></article>`;
}

function renderVirtual() {
  const spaces = [
    {name:"A区 · 云帆科技", cls:"tall busy", status:"使用中", capacity:"12/12", type:"企业办公区"}, {name:"M01 · 刺桐厅", cls:"available", status:"可预约", capacity:"18人", type:"会议室"}, {name:"共享休闲区", cls:"wide available", status:"开放", capacity:"24人", type:"公共区域"}, {name:"B区 · 刺桐文创", cls:"busy", status:"使用中", capacity:"11/16", type:"企业办公区"}, {name:"M02 · 海丝厅", cls:"busy", status:"会议中", capacity:"10人", type:"会议室"}, {name:"D18 · 共享工位", cls:"wide available", status:"剩余6席", capacity:"14/20", type:"共享办公"}, {name:"设备间", cls:"maintenance", status:"维护中", capacity:"—", type:"设施空间"}
  ];
  return `
    <div class="page-tools"><div><span class="eyebrow">DIGITAL TWIN · RESERVED</span><h2>5F 虚拟空间</h2><p>当前为可交互的楼层示意，后续将接入正式虚拟空间开发成果。</p></div><div class="tool-actions"><button class="secondary-btn" data-action="virtual-config">对接配置</button><button class="primary-btn" data-action="virtual-fullscreen">全屏浏览</button></div></div>
    <div class="floor-plan-shell"><div class="floor-map"><div class="map-title"><strong>FLOOR 05</strong><small>鲤城大厦 · 众创空间平面导览</small></div><div class="map-compass">N</div><div class="floor-layout">${spaces.map((s,i)=>`<div class="map-space ${s.cls} ${i===0?"selected":""}" data-action="select-space" data-space='${JSON.stringify(s)}'><span>${s.name}</span><small>${s.status} · ${s.capacity}</small></div>`).join("")}</div></div><aside class="map-side"><span class="eyebrow" style="color:#f2b63d">SELECTED SPACE</span><h3 id="spaceName">A区 · 云帆科技</h3><p id="spaceDesc">企业专属办公区域。点击平面图中的其他空间，可以查看实时状态和容量信息。</p><div class="map-detail"><div><span>空间类型</span><b id="spaceType">企业办公区</b></div><div><span>当前状态</span><b id="spaceStatus">使用中</b></div><div><span>使用情况</span><b id="spaceCapacity">12/12</b></div><div><span>数据更新</span><b>刚刚</b></div></div><button class="primary-btn" data-action="space-book">查看详情 / 预约</button><div class="legend"><div><i style="background:#bfe2d3"></i>空闲 / 可预约</div><div><i style="background:#efd399"></i>使用中</div><div><i style="background:#e1b7af"></i>维护或停用</div></div></aside></div>`;
}

function renderScreen() {
  return `<div class="screen-mode">
    <header class="screen-header"><div><span class="eyebrow" style="color:#f2b63d">SPACE OPERATIONS CENTER</span><h2>鲤城众创空间 · 运营驾驶舱</h2><p>鲤城大厦 5F · 数据每 60 秒更新</p></div><div class="screen-clock" id="screenClock">14:36:20<small>2026 / 08 / 18 · TUESDAY</small></div></header>
    <div class="screen-metrics"><div class="screen-metric"><span>当前在场人数</span><strong>32 <small style="font-size:12px">人</small></strong><i>↑ 较昨日同期 +5</i></div><div class="screen-metric"><span>综合空间利用率</span><strong>76%</strong><i>↑ 本月目标 72%</i></div><div class="screen-metric"><span>今日预约</span><strong>7 <small style="font-size:12px">笔</small></strong><i>会议室 5 · 工位 2</i></div><div class="screen-metric"><span>本月运营收入</span><strong>¥2,840</strong><i>↑ 环比 +12.6%</i></div></div>
    <div class="screen-grid"><section class="screen-panel"><h3>近七日空间使用人次</h3><div class="bar-chart"><div style="height:45%" data-label="08/12"></div><div style="height:57%" data-label="08/13"></div><div style="height:52%" data-label="08/14"></div><div style="height:68%" data-label="08/15"></div><div style="height:61%" data-label="08/16"></div><div style="height:80%" data-label="08/17"></div><div style="height:88%" data-label="今天"></div></div></section><section class="screen-panel"><h3>企业在场人数排行</h3><div class="company-rank"><div class="rank-row"><i>01</i><span>云帆科技</span><div class="rank-bar"><i style="width:92%"></i></div><b>12</b></div><div class="rank-row"><i>02</i><span>刺桐文创</span><div class="rank-bar"><i style="width:75%"></i></div><b>9</b></div><div class="rank-row"><i>03</i><span>海丝智造</span><div class="rank-bar"><i style="width:67%"></i></div><b>7</b></div><div class="rank-row"><i>04</i><span>闽南数联</span><div class="rank-bar"><i style="width:35%"></i></div><b>4</b></div></div></section></div>
    <div class="screen-grid"><section class="screen-panel" style="min-height:180px"><h3>区域实时状态</h3><div class="floor-strip"><div class="floor-unit active"><strong>A区</strong><small>满负荷 · 12人</small></div><div class="floor-unit"><strong>B区</strong><small>正常 · 9人</small></div><div class="floor-unit busy"><strong>会议室</strong><small>2 / 3 使用</small></div><div class="floor-unit"><strong>共享工位</strong><small>剩余 6 席</small></div><div class="floor-unit"><strong>公共区域</strong><small>正常开放</small></div></div></section><section class="screen-panel" style="min-height:180px"><h3>运营提醒</h3><div class="activity-list"><div class="activity-item"><span class="activity-symbol" style="color:#142437">门</span><p><b>3 项门禁任务待处理</b>含 1 项临时访客审批</p><time>实时</time></div><div class="activity-item"><span class="activity-symbol" style="color:#142437">告</span><p><b>消防通知仍有 7 人未确认</b>建议再次发送微信提醒</p><time>10:30</time></div></div></section></div>
  </div>`;
}

function renderSettings() {
  return `
    <div class="page-tools"><div><span class="eyebrow">SYSTEM CONFIGURATION</span><h2>系统与扩展设置</h2><p>管理消息渠道、接口预留、审批规则与后续模块能力。</p></div><button class="primary-btn" data-action="save-settings">保存设置</button></div>
    <div class="settings-grid">
      <article class="section-card"><span class="eyebrow">NOTIFICATION</span><h3>消息与通知</h3><div class="setting-row"><div><b>微信通知</b><small>预约、审批和通知确认提醒</small></div><span class="switch on" data-action="toggle-setting"></span></div><div class="setting-row"><div><b>邮件通知</b><small>发送正式通知正文与附件</small></div><span class="switch on" data-action="toggle-setting"></span></div><div class="setting-row"><div><b>未确认自动提醒</b><small>发布后 24 小时自动提醒一次</small></div><span class="switch on" data-action="toggle-setting"></span></div></article>
      <article class="section-card"><span class="eyebrow">INTEGRATION</span><h3>外部系统接口</h3><div class="setting-row"><div><b>门禁系统适配器</b><small>离线模式 · 保留人脸、卡号、指纹凭证字段</small></div>${badge("待处理")}</div><div class="setting-row"><div><b>虚拟空间接口</b><small>等待后续开发成果与技术文档</small></div>${badge("待处理")}</div><div class="setting-row"><div><b>微信支付</b><small>演示模式 · 待配置商户号</small></div>${badge("待确认")}</div></article>
      <article class="section-card"><span class="eyebrow">WORKFLOW</span><h3>预约与审批规则</h3><div class="setting-row"><div><b>内部会议室自动通过</b><small>入驻企业预约免费会议室无需审批</small></div><span class="switch on" data-action="toggle-setting"></span></div><div class="setting-row"><div><b>外部预约必须审批</b><small>审核通过后进入支付流程</small></div><span class="switch on" data-action="toggle-setting"></span></div><div class="setting-row"><div><b>临时门禁二次审批</b><small>支付完成后由空间管理员审批权限</small></div><span class="switch on" data-action="toggle-setting"></span></div></article>
      <article class="section-card"><span class="eyebrow">FUTURE MODULES</span><h3>后续模块预留</h3><div class="setting-row"><div><b>租赁合同与周期账单</b><small>预留企业、空间和订单关联字段</small></div>${badge("已预留")}</div><div class="setting-row"><div><b>物业报修与设备巡检</b><small>预留空间、设备和工单模型</small></div>${badge("已预留")}</div><div class="setting-row"><div><b>完整访客与停车管理</b><small>预留访客、车辆和临时权限模型</small></div>${badge("已预留")}</div></article>
    </div>`;
}

function personModal(person = {}) {
  const editing = !!person.id;
  openModal(`<h2>${editing ? "编辑人员档案" : "新增入驻人员"}</h2><p class="modal-subtitle">人员资料将用于企业名录和门禁授权任务。</p><form id="personForm" class="form-grid"><input type="hidden" name="id" value="${person.id || ""}"><div class="form-field"><label>姓名 *</label><input name="name" required value="${escapeHtml(person.name || "")}" placeholder="请输入姓名"></div><div class="form-field"><label>手机号 *</label><input name="phone" required value="${escapeHtml(person.phone || "")}" placeholder="请输入手机号"></div><div class="form-field"><label>所属企业 *</label><select name="company" required>${visibleCompanies().map(c=>`<option ${person.company===c.name?"selected":""}>${escapeHtml(c.name)}</option>`).join("")}</select></div><div class="form-field"><label>部门</label><input name="department" value="${escapeHtml(person.department || "")}" placeholder="如：研发部"></div><div class="form-field"><label>职务</label><input name="role" value="${escapeHtml(person.role || "")}" placeholder="如：产品经理"></div><div class="form-field"><label>办公区域</label><input name="area" value="${escapeHtml(person.area || "")}" placeholder="如：A-09"></div><div class="form-field"><label>当前状态</label><select name="status"><option ${person.status==="在场"?"selected":""}>在场</option><option ${person.status==="离场"?"selected":""}>离场</option></select></div><div class="form-field"><label>门禁凭证</label><select name="credential"><option>待录入</option><option ${person.credential==="人脸"?"selected":""}>人脸</option><option ${person.credential==="门禁卡"?"selected":""}>门禁卡</option><option ${person.credential==="人脸 / 门禁卡"?"selected":""}>人脸 / 门禁卡</option><option>指纹凭证编号</option></select></div><div class="form-field full form-note">保存后将${editing ? "根据资料变化更新" : "自动生成"}一条待处理的门禁授权任务，但不会直接操作现有门禁设备。</div><div class="modal-actions form-field full"><button type="button" class="secondary-btn" data-action="close-modal">取消</button><button type="submit" class="primary-btn">保存人员</button></div></form>`);
}
function companyModal(company = {}) {
  const editing = !!company.id;
  openModal(`<h2>${editing ? "编辑入驻企业" : "新增入驻企业"}</h2><p class="modal-subtitle">维护企业租赁区域、负责人和席位信息。</p><form id="companyForm" class="form-grid"><input type="hidden" name="id" value="${company.id||""}"><div class="form-field full"><label>企业名称 *</label><input name="name" required value="${escapeHtml(company.name||"")}"></div><div class="form-field"><label>企业简称 *</label><input name="short" required maxlength="3" value="${escapeHtml(company.short||"")}"></div><div class="form-field"><label>负责人 *</label><input name="leader" required value="${escapeHtml(company.leader||"")}"></div><div class="form-field"><label>联系电话</label><input name="phone" value="${escapeHtml(company.phone||"")}"></div><div class="form-field"><label>租赁区域</label><input name="area" value="${escapeHtml(company.area||"")}" placeholder="如：E区 · 10席"></div><div class="form-field"><label>席位数</label><input name="seats" type="number" min="1" value="${company.seats||10}"></div><div class="form-field"><label>租赁到期日</label><input name="expiry" type="date" value="${company.expiry||"2027-08-18"}"></div><div class="form-field"><label>企业状态</label><select name="status"><option>正常</option><option ${company.status==="即将到期"?"selected":""}>即将到期</option><option>停用</option></select></div><div class="modal-actions form-field full"><button type="button" class="secondary-btn" data-action="close-modal">取消</button><button type="submit" class="primary-btn">保存企业</button></div></form>`);
}
function accessModal() {
  openModal(`<h2>新建门禁申请</h2><p class="modal-subtitle">审批完成后将进入人工门禁配置清单。</p><form id="accessForm" class="form-grid"><div class="form-field"><label>申请人员 *</label><input name="person" required></div><div class="form-field"><label>所属单位 *</label><input name="company" required></div><div class="form-field"><label>申请类型</label><select name="type"><option>新增授权</option><option>临时门禁</option><option>区域变更</option><option>权限注销</option></select></div><div class="form-field"><label>通行范围</label><input name="scope" value="5F东门 / 公共区域"></div><div class="form-field full"><label>有效时间</label><input name="valid" placeholder="如：2026-08-20 09:00 至 18:00"></div><div class="form-note form-field full">涉及外部人员的临时门禁将先进入“待审批”，内部人员变更生成“待处理”任务。</div><div class="modal-actions form-field full"><button type="button" class="secondary-btn" data-action="close-modal">取消</button><button type="submit" class="primary-btn">提交申请</button></div></form>`);
}
function noticeModal() {
  openModal(`<h2>发布新通知</h2><p class="modal-subtitle">可通过微信、邮件发送，并跟踪确认回执。</p><form id="noticeForm" class="form-grid"><div class="form-field"><label>通知类型</label><select name="type"><option>日常办公</option><option>培训活动</option><option>安全警示</option><option>临时通知</option></select></div><div class="form-field"><label>通知级别</label><select name="level"><option>普通</option><option>重要</option><option>紧急</option></select></div><div class="form-field full"><label>通知标题 *</label><input name="title" required></div><div class="form-field full"><label>通知内容 *</label><textarea name="content" required></textarea></div><div class="form-field"><label>发送范围</label><select name="target"><option>全体人员</option><option>企业管理员</option><option>指定企业</option></select></div><div class="form-field"><label>触达渠道</label><select name="channel"><option>微信 + 邮件</option><option>微信</option><option>邮件</option></select></div><div class="modal-actions form-field full"><button type="button" class="secondary-btn" data-action="close-modal">取消</button><button type="submit" class="primary-btn">发布并发送</button></div></form>`);
}
function bookingModal(roomId = "") {
  const room = state.rooms.find(r=>r.id===Number(roomId));
  openModal(`<h2>预约会议室</h2><p class="modal-subtitle">系统会自动检查时段冲突，外部预约将生成收费订单。</p><form id="bookingForm" class="form-grid"><div class="form-field"><label>会议室 *</label><select name="room" required>${state.rooms.map(r=>`<option ${room?.id===r.id?"selected":""}>${escapeHtml(r.name)}</option>`).join("")}</select></div><div class="form-field"><label>预约类型</label><select name="external" id="bookingType"><option value="false">入驻企业（免费）</option><option value="true">外部单位（收费）</option></select></div><div class="form-field"><label>预约单位 *</label><input name="company" required value="泉州云帆科技"></div><div class="form-field"><label>联系人 *</label><input name="contact" required></div><div class="form-field"><label>使用日期</label><input name="date" type="date" required value="2026-08-20"></div><div class="form-field"><label>预计人数</label><input name="attendees" type="number" min="1" value="6"></div><div class="form-field"><label>开始时间</label><input name="start" type="time" required value="09:00"></div><div class="form-field"><label>结束时间</label><input name="end" type="time" required value="11:00"></div><div class="form-note form-field full">内部企业预约默认自动通过；外部预约需运营审核，并按 ¥120/小时生成待支付订单。</div><div class="modal-actions form-field full"><button type="button" class="secondary-btn" data-action="close-modal">取消</button><button type="submit" class="primary-btn">确认预约</button></div></form>`);
}
function resourceBookingModal(resourceId = "") {
  const r = state.resources.find(x=>x.id===Number(resourceId)) || state.resources[0];
  openModal(`<h2>新建外部办公预约</h2><p class="modal-subtitle">预约审核后可在线支付或登记线下支付。</p><form id="resourceBookingForm" class="form-grid"><div class="form-field full"><label>办公资源 *</label><select name="resource">${state.resources.map(x=>`<option value="${x.id}" ${x.id===r.id?"selected":""}>${escapeHtml(x.name)} · ¥${x.price}/${x.unit}</option>`).join("")}</select></div><div class="form-field"><label>单位名称 *</label><input name="customer" required></div><div class="form-field"><label>联系人 *</label><input name="contact" required></div><div class="form-field"><label>联系电话 *</label><input name="phone" required></div><div class="form-field"><label>使用人数</label><input name="people" type="number" min="1" value="1"></div><div class="form-field"><label>开始日期</label><input name="startDate" type="date" required value="2026-08-21"></div><div class="form-field"><label>使用天数</label><input name="days" type="number" min="1" value="1"></div><div class="form-field full"><label>使用用途</label><textarea name="purpose" placeholder="请简要说明办公用途"></textarea></div><div class="form-note form-field full">提交后将生成待审核预约和待支付订单。临时门禁需要另行审批，不会自动获得权限。</div><div class="modal-actions form-field full"><button type="button" class="secondary-btn" data-action="close-modal">取消</button><button type="submit" class="primary-btn">提交预约</button></div></form>`);
}
function orderModal() {
  openModal(`<h2>登记线下收款</h2><p class="modal-subtitle">适用于转账、现金或 POS 等线下支付方式。</p><form id="orderForm" class="form-grid"><div class="form-field"><label>客户名称 *</label><input name="customer" required></div><div class="form-field"><label>预约项目 *</label><input name="item" required></div><div class="form-field"><label>实收金额 *</label><input name="amount" type="number" min="0" required></div><div class="form-field"><label>支付方式</label><select name="method"><option>线下转账</option><option>线下现金</option><option>线下POS</option></select></div><div class="form-field full"><label>支付凭证备注</label><textarea name="note"></textarea></div><div class="modal-actions form-field full"><button type="button" class="secondary-btn" data-action="close-modal">取消</button><button type="submit" class="primary-btn">保存并确认收款</button></div></form>`);
}

function bindPageEvents() {
  appContent.querySelectorAll("[data-nav]").forEach(el=>el.addEventListener("click",()=>navigate(el.dataset.nav)));
  appContent.querySelectorAll("[data-people-view]").forEach(el=>el.addEventListener("click",()=>{ state.peopleView=el.dataset.peopleView; saveState(); render(); }));
  const peopleFilter = document.getElementById("peopleFilter");
  const statusFilter = document.getElementById("statusFilter");
  const applyPeopleFilter = () => { const q=(peopleFilter?.value||"").trim().toLowerCase(); const status=statusFilter?.value||""; const rows=visiblePeople().filter(p=>(!q || [p.name,p.company,p.department,p.role].join(" ").toLowerCase().includes(q)) && (!status||p.status===status)); document.getElementById("peopleTableBody").innerHTML = renderPeopleTable(rows).match(/<tbody id="peopleTableBody">([\s\S]*)<\/tbody>/)?.[1] || ""; };
  peopleFilter?.addEventListener("input",applyPeopleFilter); statusFilter?.addEventListener("change",applyPeopleFilter);
  if (state.currentPage === "screen") updateClock();
}

function handleAction(action, id, el) {
  const mutatingActions = new Set(["add-person","edit-person","delete-person","add-company","edit-company","add-access","approve-access","add-notice","remind-notices","book-room","book-specific-room","external-booking","book-resource","add-order","confirm-payment","refund-order","save-settings","toggle-setting"]);
  if (state.currentRole === "executive" && mutatingActions.has(action)) { toast("当前为只读角色", "管理层账号只能查看运营数据"); return; }
  if (state.currentRole === "company-admin" && ["add-company","edit-company","approve-access","save-settings","toggle-setting"].includes(action)) { toast("权限不足", "入驻企业管理员不能执行该操作"); return; }
  if (action === "quick-book" || action === "book-room") return bookingModal();
  if (action === "book-specific-room") return bookingModal(id);
  if (action === "add-person") return personModal();
  if (action === "edit-person") return personModal(state.people.find(p=>p.id===Number(id)));
  if (action === "delete-person") { if (confirm("确认将该人员从当前名录中移除吗？系统会同时生成门禁注销任务。")) { const p=state.people.find(x=>x.id===Number(id)); state.people=state.people.filter(x=>x.id!==Number(id)); if(p) state.accessTasks.unshift({id:uid(),person:p.name,company:p.company,type:"权限注销",scope:"5F全部区域",valid:"立即生效",status:"待处理",created:"刚刚"}); saveState(); render(); toast("人员已移除","门禁注销任务已生成"); } return; }
  if (action === "person-access") return navigate("access");
  if (action === "add-company") return companyModal();
  if (action === "edit-company") return companyModal(state.companies.find(c=>c.id===Number(id)));
  if (action === "add-access") return accessModal();
  if (action === "approve-access") { const task=state.accessTasks.find(t=>t.id===Number(id)); if(task){ task.status="已处理"; const p=state.people.find(x=>x.name===task.person); if(p) p.access=task.type==="权限注销"?"已注销":"已授权"; saveState(); render(); toast("门禁任务已完成","处理结果已写入操作记录"); } return; }
  if (action === "view-access") return showInfo("门禁处理记录", "该任务已由空间管理员完成线下配置，处理结果和操作时间已留痕。\n\n后续接入门禁设备接口后，此处将展示设备返回的授权编号与同步日志。");
  if (action === "integration-info") return showInfo("门禁接口预留字段", "人员编号、人脸照片索引、门禁卡号、指纹凭证编号、通行区域、权限生效时间、失效时间、设备授权状态、同步状态与失败原因。\n\n系统不保存原始指纹数据，仅保存设备返回的凭证关联标识。");
  if (["export-access","export-people","export-orders"].includes(action)) return exportData(action);
  if (action === "add-notice") return noticeModal();
  if (action === "remind-notices") { toast("提醒已加入发送队列", "将通过微信或邮件提醒未确认人员"); return; }
  if (action === "notice-detail") { const n=state.notices.find(x=>x.id===Number(id)); return showInfo("通知回执明细", `${n.title}\n\n已发送：${n.total} 人\n已确认：${n.confirmed} 人\n未确认：${n.total-n.confirmed} 人\n触达渠道：${n.channel}`); }
  if (action === "booking-list") return showInfo("预约记录", state.bookings.map(b=>`${b.date} ${b.start}-${b.end} · ${b.room} · ${b.company} · ${b.status}`).join("\n"));
  if (action === "external-booking") return resourceBookingModal();
  if (action === "book-resource") return resourceBookingModal(id);
  if (action === "manage-resources") return showInfo("资源管理", "演示版已维护 3 类共享办公资源。正式版可继续配置图片、库存、开放日期、分时价格、押金与取消规则。");
  if (action === "add-order") return orderModal();
  if (action === "confirm-payment") { const o=state.orders.find(x=>x.id===id); if(o){o.status="已支付";saveState();render();toast("线下收款已确认",`订单 ${id} 已更新为已支付`);} return; }
  if (action === "refund-order") { const o=state.orders.find(x=>x.id===id); if(o && confirm(`确认对订单 ${id} 发起退款吗？`)){o.status="退款中";saveState();render();toast("退款申请已提交","订单进入退款审批流程");} return; }
  if (action === "order-detail") { const o=state.orders.find(x=>x.id===id); return showInfo("订单详情", `订单：${o.id}\n客户：${o.customer}\n项目：${o.item}\n金额：¥${o.amount}\n支付方式：${o.method}\n状态：${o.status}`); }
  if (action === "select-space") { appContent.querySelectorAll(".map-space").forEach(x=>x.classList.remove("selected")); el.classList.add("selected"); const s=JSON.parse(el.dataset.space); document.getElementById("spaceName").textContent=s.name; document.getElementById("spaceType").textContent=s.type; document.getElementById("spaceStatus").textContent=s.status; document.getElementById("spaceCapacity").textContent=s.capacity; return; }
  if (action === "virtual-config") return showInfo("虚拟空间对接配置", "当前为预留状态。待提供虚拟空间开发成果后，可配置页面地址、单点登录密钥、空间编码映射、状态接口及预约接口。");
  if (action === "virtual-fullscreen") { document.querySelector(".floor-plan-shell")?.requestFullscreen?.(); return; }
  if (action === "space-book") return navigate("meetings");
  if (action === "toggle-setting") { el.classList.toggle("on"); return; }
  if (action === "save-settings") { toast("系统设置已保存","演示配置已更新"); return; }
}

function showInfo(title, text) { openModal(`<h2>${escapeHtml(title)}</h2><p class="modal-subtitle" style="white-space:pre-line;line-height:1.9;font-size:12px;color:#4f5c64">${escapeHtml(text)}</p><div class="modal-actions"><button class="primary-btn" data-action="close-modal">知道了</button></div>`); }
function exportData(action) {
  const mapping = { "export-people": ["人员清单", state.people], "export-access": ["门禁任务清单", state.accessTasks], "export-orders": ["订单流水", state.orders] };
  const [name, data] = mapping[action]; const blob = new Blob(["\ufeff" + JSON.stringify(data, null, 2)], {type:"application/json;charset=utf-8"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=`${name}-20260818.json`; a.click(); URL.revokeObjectURL(url); toast(`${name}已导出`,"文件已保存到浏览器下载目录");
}
function updateClock() {
  const el=document.getElementById("screenClock"); if(!el) return; const now=new Date(); el.childNodes[0].nodeValue=now.toLocaleTimeString("zh-CN",{hour12:false})+" ";
}

document.querySelectorAll(".nav-item").forEach(btn=>btn.addEventListener("click",()=>navigate(btn.dataset.page)));
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("modalClose").addEventListener("click",closeModal);
modalBackdrop.addEventListener("click",e=>{if(e.target===modalBackdrop)closeModal();});
document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeModal(); if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();document.getElementById("globalSearch").focus();} });
document.getElementById("roleSwitcher").value=state.currentRole;
document.getElementById("roleSwitcher").addEventListener("change",e=>{state.currentRole=e.target.value;saveState();render();toast("演示角色已切换",`当前身份：${roleLabels[state.currentRole]}${state.currentRole === "company-admin" ? " · 仅显示泉州云帆科技数据" : state.currentRole === "executive" ? " · 只读权限" : ""}`);});
document.getElementById("globalSearch").addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.value.trim()){state.peopleView="people";navigate("people");setTimeout(()=>{const input=document.getElementById("peopleFilter");if(input){input.value=e.target.value;input.dispatchEvent(new Event("input"));}},50);}});
document.getElementById("notificationBtn").addEventListener("click",()=>{navigate("notices");});
appContent.addEventListener("click",e=>{const target=e.target.closest("[data-action]");if(target)handleAction(target.dataset.action,target.dataset.id,target);});
document.addEventListener("click",e=>{const action=e.target.closest("[data-action]")?.dataset.action;if(action==="close-modal")closeModal();});
document.addEventListener("submit",e=>{
  e.preventDefault(); const form=e.target; const data=Object.fromEntries(new FormData(form));
  if(form.id==="personForm"){const existing=state.people.find(p=>p.id===Number(data.id));const next={id:existing?.id||uid(),name:data.name,phone:data.phone,company:data.company,department:data.department||"未分配",role:data.role||"员工",area:data.area||"待分配",status:data.status,access:existing?.access||"待处理",credential:data.credential};if(existing)Object.assign(existing,next);else state.people.unshift(next);state.accessTasks.unshift({id:uid(),person:next.name,company:next.company,type:existing?"资料变更":"新增授权",scope:`5F东门 / ${next.area}`,valid:"长期",status:"待处理",created:"刚刚"});saveState();closeModal();render();toast(existing?"人员资料已更新":"人员已新增","门禁处理任务已同步生成");}
  if(form.id==="companyForm"){const existing=state.companies.find(c=>c.id===Number(data.id));const next={id:existing?.id||uid(),name:data.name,short:data.short.toUpperCase(),leader:data.leader,phone:data.phone,area:data.area,seats:Number(data.seats),people:existing?.people||0,expiry:data.expiry,status:data.status,color:existing?.color||"#4c87b8"};if(existing)Object.assign(existing,next);else state.companies.push(next);saveState();closeModal();render();toast(existing?"企业资料已更新":"入驻企业已新增");}
  if(form.id==="accessForm"){state.accessTasks.unshift({id:uid(),person:data.person,company:data.company,type:data.type,scope:data.scope,valid:data.valid||"待确认",status:data.type==="临时门禁"?"待审批":"待处理",created:"刚刚"});saveState();closeModal();render();toast("门禁申请已提交","已进入审批与人工处理流程");}
  if(form.id==="noticeForm"){const total=data.target==="全体人员"?state.people.length:state.companies.length;state.notices.unshift({id:uid(),type:data.type,level:data.level,title:data.title,content:data.content,target:data.target,channel:data.channel,confirmed:0,total,date:"2026-08-18",icon:data.type[0]});saveState();closeModal();render();toast("通知已发布",`正在通过${data.channel}发送`);}
  if(form.id==="bookingForm"){if(data.start>=data.end){toast("预约时间无效","结束时间必须晚于开始时间");return;}const external=data.external==="true";const conflict=state.bookings.some(b=>b.room===data.room&&b.date===data.date&&data.start<b.end&&data.end>b.start);if(conflict){toast("预约时段冲突","该会议室在所选时间已有预约");return;}state.bookings.push({id:uid(),room:data.room,company:data.company,contact:data.contact,date:data.date,start:data.start,end:data.end,status:external?"待审批":"已确认",external});if(external){const hours=Math.max(1,(Number(data.end.slice(0,2))-Number(data.start.slice(0,2))));state.orders.unshift({id:`LC${Date.now()}`,customer:data.company,item:`${data.room} · ${hours}小时`,amount:hours*120,method:"待选择",status:"待确认",date:"2026-08-18 现在"});}saveState();closeModal();render();toast("会议室预约已提交",external?"外部预约已进入审核与支付流程":"内部预约已自动确认");}
  if(form.id==="resourceBookingForm"){const r=state.resources.find(x=>x.id===Number(data.resource));const days=Number(data.days);state.orders.unshift({id:`LC${Date.now()}`,customer:data.customer,item:`${r.name} · ${days}${r.unit}`,amount:r.price*days,method:"待选择",status:"待确认",date:"2026-08-18 现在"});state.accessTasks.unshift({id:uid(),person:data.contact,company:`外部访客 · ${data.customer}`,type:"临时门禁",scope:`5F东门 / ${r.code}`,valid:`${data.startDate} 起 ${days} 天`,status:"待审批",created:"刚刚"});saveState();closeModal();render();toast("外部预约已提交","订单和临时门禁审批任务已生成");}
  if(form.id==="orderForm"){state.orders.unshift({id:`LC${Date.now()}`,customer:data.customer,item:data.item,amount:Number(data.amount),method:data.method,status:"已支付",date:"2026-08-18 现在"});saveState();closeModal();render();toast("线下收款已登记","订单已标记为已支付");}
});

document.querySelectorAll(".nav-item").forEach(btn=>btn.classList.toggle("active",btn.dataset.page===state.currentPage));
document.getElementById("pageTitle").textContent=pageTitles[state.currentPage];
render();
setInterval(updateClock,1000);
