/* =========================================================
   common.js — โค้ดที่ทุกหน้าใช้ร่วมกัน
   1. ข้อมูลตัวอย่าง
   2. อ่าน / บันทึกข้อมูล (localStorage)
   3. ผู้ใช้ที่ล็อกอินอยู่ และแอดมิน
   4. ฟังก์ชันช่วยเรื่องวันที่และสถานะกิจกรรม
   5. สถานะคำขอจัดกิจกรรม
   6. สร้าง HTML ของการ์ดกิจกรรม
   7. ข้อความแจ้งเตือน และข้อความ error ในฟอร์ม
   ========================================================= */


/* ---------- 1. ข้อมูลตัวอย่าง ---------- */

// คืนค่าวันที่ที่ห่างจากวันนี้ n วัน ในรูปแบบ "2026-10-25"
function addDays(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return year + "-" + month + "-" + day;
}

function today() {
  return addDays(0);
}

// เวลาตอนนี้ในรูปแบบ "14:05"
function nowTime() {
  const d = new Date();
  return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
}

// กิจกรรมตัวอย่าง (วันที่นับจากวันนี้ เพื่อให้มีกิจกรรมที่กำลังจะมาเสมอ)
// organizer = เจ้าภาพที่จัด, contact... = ผู้ติดต่อ, formLink = ลิงก์แบบฟอร์มสมัคร
const SAMPLE_EVENTS = [
  {
    id: "e0", cat: "วิชาการ", status: "open", createdBy: null,
    title: "Workshop เขียนเรซูเม่ให้โดดเด่น", poster: "RESUME", tagline: "เตรียมตัวก่อนฝึกงาน",
    date: addDays(-15), start: "13:00", end: "15:00", place: "ห้องประชุม 2 อาคาร 11",
    cap: 60, joined: 60, organizer: "ฝ่ายแนะแนวและจัดหางาน",
    contactName: "คุณศิริพร", contactPhone: "081-111-1111", contactEmail: "career@spumail.net",
    formLink: "",
    desc: "เรียนรู้วิธีเขียนเรซูเม่และพอร์ตโฟลิโอให้น่าสนใจ พร้อมรีวิวเรซูเม่จริงโดยรุ่นพี่ศิษย์เก่า",
    who: "นักศึกษาชั้นปี 3-4", bring: "ไฟล์เรซูเม่ฉบับร่าง"
  },
  {
    id: "e1", cat: "วิชาการ", status: "open", createdBy: null,
    title: "อบรมการใช้ Figma เบื้องต้น", poster: "FIGMA", tagline: "เรียนรู้ ออกแบบ ลงมือทำ",
    date: addDays(0), start: "13:00", end: "16:00", place: "ห้อง 301 อาคารเทคโนโลยี",
    cap: 40, joined: 22, organizer: "ชมรมดิจิทัลดีไซน์",
    contactName: "พี่ต้นกล้า (ประธานชมรม)", contactPhone: "082-222-2222", contactEmail: "Line: @spudesign",
    formLink: "https://docs.google.com/forms",
    desc: "เรียนรู้พื้นฐาน Figma ตั้งแต่เฟรมและเลเยอร์ ไปจนถึงการทำต้นแบบ ลงมือทำจริงตลอดช่วงอบรม",
    who: "นักศึกษา SPU ทุกคณะ ไม่ต้องมีพื้นฐาน", bring: "โน้ตบุ๊กและบัญชี Figma ฟรี"
  },
  {
    id: "e2", cat: "ความบันเทิง", status: "open", createdBy: null,
    title: "SPU Night ลอยกระทง", poster: "SPU NIGHT", tagline: "ค่ำคืนลอยกระทงของชาว SPU",
    date: addDays(11), start: "17:00", end: "22:00", place: "ลานกิจกรรมกลาง",
    cap: 500, joined: 320, organizer: "สโมสรนักศึกษา",
    contactName: "ฝ่ายประชาสัมพันธ์สโมสร", contactPhone: "083-333-3333", contactEmail: "club@spumail.net",
    formLink: "https://docs.google.com/forms",
    desc: "ร่วมลอยกระทง ชมการแสดงจากชมรมดนตรี และเลือกชิมอาหารจากร้านค้านักศึกษาในค่ำคืนวันลอยกระทง",
    who: "นักศึกษาและบุคลากร SPU", bring: "กระทงจากวัสดุธรรมชาติ (มีจำหน่ายในงาน)"
  },
  {
    id: "e3", cat: "กีฬา", status: "closed", createdBy: null,
    title: "SPU Futsal Cup 2569", poster: "FUTSAL CUP", tagline: "แข่งขันระหว่างคณะ",
    date: addDays(14), start: "09:00", end: "17:00", place: "สนามกีฬาในร่ม",
    cap: 16, joined: 16, organizer: "ชมรมฟุตซอล",
    contactName: "พี่บอส", contactPhone: "084-444-4444", contactEmail: "",
    formLink: "",
    desc: "การแข่งขันฟุตซอลระหว่างคณะ ชิงถ้วยรางวัลและทุนการศึกษา มาเชียร์ทีมคณะของคุณกันเยอะๆ",
    who: "ทีมตัวแทนคณะ คณะละ 1-2 ทีม", bring: "ชุดกีฬาและรองเท้าฟุตซอล"
  },
  {
    id: "e4", cat: "จิตอาสา", status: "open", createdBy: null,
    title: "จิตอาสาปลูกป่าชายเลน", poster: "MANGROVE", tagline: "ร่วมปลูก ร่วมดูแลธรรมชาติ",
    date: addDays(21), start: "07:00", end: "15:00", place: "สมุทรสงคราม",
    cap: 30, joined: 25, organizer: "ชมรมอนุรักษ์ธรรมชาติ",
    contactName: "พี่ใบเตย", contactPhone: "085-555-5555", contactEmail: "green@spumail.net",
    formLink: "https://docs.google.com/forms",
    desc: "เดินทางไปปลูกป่าชายเลนร่วมกับชุมชนท้องถิ่น มีรถรับส่งจากมหาวิทยาลัย และนับชั่วโมงจิตอาสาได้",
    who: "นักศึกษาทุกชั้นปี", bring: "ชุดที่เปื้อนได้ หมวก ครีมกันแดด"
  },
  {
    id: "e5", cat: "วิชาการ", status: "open", createdBy: "demo@spumail.net", requestId: "r1",
    title: "ประกวดถ่ายภาพ SPU Campus", poster: "PHOTO", tagline: "เก็บมุมสวยในรั้วมหาวิทยาลัย",
    date: addDays(26), start: "10:00", end: "16:00", place: "ลานกิจกรรมกลาง",
    cap: 100, joined: 12, organizer: "ชมรมถ่ายภาพ SPU",
    contactName: "มินตรา ใจดี", contactPhone: "086-666-6666", contactEmail: "demo@spumail.net",
    formLink: "https://docs.google.com/forms",
    desc: "ส่งภาพถ่ายมุมโปรดในมหาวิทยาลัย ลุ้นรางวัลและจัดแสดงในนิทรรศการปลายภาค",
    who: "นักศึกษา SPU ทุกคณะ", bring: "กล้องหรือโทรศัพท์มือถือ"
  }
];

// คำขอจัดกิจกรรมตัวอย่าง (ส่งถึงคณบดี)
// status: "sending" = กำลังส่ง, "processing" = ดำเนินการ, "approved" = อนุมัติ, "rejected" = ไม่อนุมัติ
const SAMPLE_REQUESTS = [
  {
    id: "r1", createdBy: "demo@spumail.net", toFaculty: "คณะนิเทศศาสตร์", status: "approved", note: "", eventId: "e5",
    title: "ประกวดถ่ายภาพ SPU Campus", desc: "ประกวดภาพถ่ายมุมสวยในมหาวิทยาลัย เพื่อนำภาพไปจัดนิทรรศการปลายภาค",
    date: addDays(26), start: "10:00", end: "16:00", place: "ลานกิจกรรมกลาง",
    organizer: "ชมรมถ่ายภาพ SPU", payer: "ชมรมถ่ายภาพ SPU (งบชมรม)", budget: 5000, people: 100,
    submittedAt: addDays(-10)
  },
  {
    id: "r2", createdBy: "demo@spumail.net", toFaculty: "คณะนิเทศศาสตร์", status: "processing", note: "", eventId: null,
    title: "ค่ายอาสาพัฒนาโรงเรียนชนบท", desc: "ทาสีอาคารเรียน สร้างห้องสมุด และจัดกิจกรรมให้น้องๆ 2 วัน 1 คืน",
    date: addDays(40), start: "08:00", end: "17:00", place: "โรงเรียนบ้านหนองบัว จ.นครนายก",
    organizer: "ชมรมอาสาพัฒนา", payer: "กองกิจการนักศึกษา", budget: 30000, people: 40,
    submittedAt: addDays(-3)
  },
  {
    id: "r3", createdBy: "demo@spumail.net", toFaculty: "คณะนิเทศศาสตร์", status: "rejected", eventId: null,
    note: "ยังไม่ระบุแหล่งงบประมาณ และเวลาเลิกงานดึกเกินไป กรุณาแก้ไขแล้วส่งใหม่",
    title: "Music Fest หน้าตึก", desc: "คอนเสิร์ตดนตรีสดจากวงนักศึกษา เปิดพื้นที่ให้ชมรมดนตรีได้แสดงผลงาน",
    date: addDays(30), start: "17:00", end: "23:00", place: "ลานหน้าอาคาร 1",
    organizer: "ชมรมดนตรีสากล", payer: "ยังไม่ระบุ", budget: 0, people: 300,
    submittedAt: addDays(-5)
  }
];

// ประกาศ / ประชาสัมพันธ์ ที่แสดงบนหน้าหลัก (แอดมินเพิ่ม/ลบได้)
// text = ข้อความสั้นบนการ์ด, detail = รายละเอียดในหน้า news.html, image = รูปโปสเตอร์ (ถ้ามี)
const SAMPLE_NEWS = [
  {
    id: "n1", tag: "ประกาศ", color: "c-vol", image: "", link: "event.html?id=e4",
    title: "เปิดรับสมัครจิตอาสา ภาคเรียนที่ 2",
    text: "สะสมชั่วโมงจิตอาสาได้ตั้งแต่วันนี้ เลือกกิจกรรมที่สนใจได้เลย",
    detail: "นักศึกษาทุกชั้นปีต้องสะสมชั่วโมงจิตอาสาอย่างน้อย 10 ชั่วโมงต่อภาคเรียน\nเลือกกิจกรรมจิตอาสาในหน้ากิจกรรม แล้วกดเข้าร่วม ระบบจะบันทึกให้อัตโนมัติ"
  },
  {
    id: "n2", tag: "ประชาสัมพันธ์", color: "c-fun", image: "", link: "event.html?id=e2",
    title: "SPU Night ลอยกระทง",
    text: "ชวนเพื่อนมาลอยกระทงด้วยกัน มีดนตรีสดและร้านอาหารนักศึกษา",
    detail: "พบกับดนตรีสดจากชมรมดนตรี ประกวดกระทง และร้านอาหารจากนักศึกษากว่า 30 ร้าน\nแต่งชุดไทยมาร่วมงาน ลุ้นรางวัลแต่งกายสวยงาม"
  },
  {
    id: "n3", tag: "ข่าวระบบ", color: "c-aca", image: "", link: "requests.html",
    title: "ยื่นคำขอจัดกิจกรรมออนไลน์ได้แล้ว",
    text: "ส่งเรื่องถึงคณบดีผ่านระบบ และติดตามสถานะได้ทันที",
    detail: "ไม่ต้องเดินเอกสารอีกต่อไป กด \"สร้างกิจกรรม\" แล้วยื่นคำขอถึงคณบดีของคณะ\nเมื่อได้รับอนุมัติ ไปต่อหน้าสร้างกิจกรรมและโพสต์ได้ทันที"
  }
];

// บัญชีตัวอย่าง: นักศึกษา 1 คน และแอดมิน 1 คน
const SAMPLE_USER = {
  email: "demo@spumail.net", password: "password123", role: "student",
  first: "มินตรา", last: "ใจดี", studentId: "66123456", faculty: "คณะนิเทศศาสตร์", year: "ปี 2",
  showName: true, notify: true,
  saved: ["e1", "e4"],          // id ของกิจกรรมที่บันทึกไว้
  joined: ["e0", "e1", "e4"]    // id ของกิจกรรมที่เข้าร่วม
};

const SAMPLE_ADMIN = {
  email: "admin@spumail.net", password: "admin1234", role: "admin",
  first: "แอดมิน", last: "SPU Event", studentId: "", faculty: "ฝ่ายกิจการนักศึกษา", year: "",
  showName: true, notify: true, saved: [], joined: []
};

// ข้อมูลติดต่อแอดมิน (แสดงในหน้าโปรไฟล์)
const ADMIN_CONTACT = {
  name: "ฝ่ายกิจการนักศึกษา (ผู้ดูแลระบบ)",
  email: "admin@spumail.net",
  phone: "02-000-0000 (ตัวอย่าง)",
  line: "@spuevent",
  hours: "จันทร์-ศุกร์ 08:30-16:30 น.",
  place: "อาคาร 1 ชั้น 2 ห้องกิจการนักศึกษา"
};

// รายชื่อคณะ / วิทยาลัย (ใช้ในช่องเลือกคณะทุกหน้า: สมัครสมาชิก, โปรไฟล์, ยื่นคำขอ)
// แก้ที่นี่ที่เดียว ทุกหน้าจะเปลี่ยนตาม
const FACULTIES = [
  "คณะการสร้างเจ้าของธุรกิจ",
  "คณะดิจิทัลมีเดีย",
  "คณะนิเทศศาสตร์",
  "คณะบริหารธุรกิจ",
  "คณะเทคโนโลยีสารสนเทศ",
  "วิทยาลัยการบิน การท่องเที่ยวและการบริการ",
  "วิทยาลัยโลจิสติกส์ การบิน และสมาร์ทโมบิลิตี้",
  "คณะศิลปศาสตร์",
  "คณะการออกแบบและสถาปัตยกรรมศาสตร์",
  "คณะบัญชี",
  "คณะนิติศาสตร์",
  "Sripatum University International College",
  "SPU The Global Design Academy",
  "คณะวิศวกรรมศาสตร์"
];

// หมวดหมู่: สีของโปสเตอร์ (class ใน CSS) และไอคอน
const CATEGORIES = {
  "วิชาการ": { color: "c-aca", icon: "i-pen" },
  "ความบันเทิง": { color: "c-fun", icon: "i-sparkle" },
  "กีฬา": { color: "c-sport", icon: "i-trophy" },
  "จิตอาสา": { color: "c-vol", icon: "i-leaf" }
};


/* ---------- 2. อ่าน / บันทึกข้อมูล ----------
   ยังไม่มีหลังบ้าน จึงเก็บข้อมูลไว้ใน localStorage ของเบราว์เซอร์
   localStorage เก็บได้แค่ข้อความ จึงต้องแปลงเป็น JSON ก่อนเก็บ */

function loadData(key, defaultValue) {
  const text = localStorage.getItem(key);
  if (text === null) return defaultValue;
  // ถ้าข้อมูลเสีย (อ่านเป็น JSON ไม่ได้) ใช้ค่าเริ่มต้นแทน ไม่ให้ทั้งหน้าพัง
  try {
    const value = JSON.parse(text);
    // ข้อมูลผิดรูปแบบ (เช่น ควรเป็นรายการแต่ไม่ใช่) ก็ใช้ค่าเริ่มต้นแทน
    if (Array.isArray(defaultValue) && !Array.isArray(value)) return defaultValue;
    return value;
  } catch (error) {
    console.warn("ข้อมูล " + key + " เสีย ใช้ค่าเริ่มต้นแทน", error);
    return defaultValue;
  }
}

function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// กิจกรรม
function getEvents() { return loadData("spu3_events", SAMPLE_EVENTS); }
function saveEvents(events) { saveData("spu3_events", events); }
function getEventById(id) { return getEvents().find(e => e.id === id); }

function updateEvent(changed) {
  saveEvents(getEvents().map(e => e.id === changed.id ? changed : e));
}

// คำขอจัดกิจกรรม
function getRequests() { return loadData("spu3_requests", SAMPLE_REQUESTS); }
function saveRequests(requests) { saveData("spu3_requests", requests); }
function getRequestById(id) { return getRequests().find(r => r.id === id); }

function updateRequest(changed) {
  saveRequests(getRequests().map(r => r.id === changed.id ? changed : r));
}

// ประกาศ
function getNews() { return loadData("spu3_news", SAMPLE_NEWS); }
function saveNews(news) { saveData("spu3_news", news); }

// ผู้ใช้
function getUsers() { return loadData("spu3_users", [SAMPLE_USER, SAMPLE_ADMIN]); }
function saveUsers(users) { saveData("spu3_users", users); }


/* ---------- 3. ผู้ใช้ที่ล็อกอินอยู่ และแอดมิน ----------
   ตอนล็อกอิน เราเก็บอีเมลไว้ใน localStorage ชื่อ "spu3_login" */

function getCurrentUser() {
  const email = localStorage.getItem("spu3_login");
  return getUsers().find(user => user.email === email) || null;
}

function updateCurrentUser(changed) {
  saveUsers(getUsers().map(u => u.email === changed.email ? changed : u));
}

function login(email) { localStorage.setItem("spu3_login", email); }
function logout() { localStorage.removeItem("spu3_login"); }

function isAdmin(user) {
  return user !== null && user.role === "admin";
}

// ใช้ในหน้าที่ต้องล็อกอินก่อน ถ้ายังไม่ล็อกอินจะพาไปหน้า login.html
function requireLogin() {
  const user = getCurrentUser();
  if (user === null) {
    location.replace("login.html");
    throw new Error("ยังไม่ได้เข้าสู่ระบบ"); // หยุดโค้ดที่เหลือของหน้านี้
  }
  return user;
}

// ใช้ในหน้าที่เฉพาะแอดมินเข้าได้
function requireAdmin() {
  const user = requireLogin();
  if (!isAdmin(user)) {
    location.replace("events.html");
    throw new Error("เฉพาะผู้ดูแลระบบ");
  }
  return user;
}


/* ---------- 4. วันที่และสถานะกิจกรรม ---------- */

const MONTHS = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

// "2026-10-25" → "25 ต.ค. 2569"
function thaiDate(dateText) {
  const parts = dateText.split("-");
  const year = Number(parts[0]) + 543;
  const month = MONTHS[Number(parts[1]) - 1];
  const day = Number(parts[2]);
  return day + " " + month + " " + year;
}

function eventTime(event) {
  return thaiDate(event.date) + " " + event.start + "-" + event.end;
}

function seatsLeft(event) { return event.cap - event.joined; }
// จบแล้ว = วันที่ผ่านไปแล้ว หรือเป็นวันนี้แต่เลยเวลาสิ้นสุดแล้ว
function isPast(event) {
  return event.date < today() || (event.date === today() && event.end <= nowTime());
}
function isOpen(event) { return event.status === "open" && seatsLeft(event) > 0 && !isPast(event); }

// เรียงจากวันที่ใกล้ไปไกล
function sortByDate(events) {
  return events.sort((a, b) => (a.date + a.start) < (b.date + b.start) ? -1 : 1);
}

// นับถอยหลัง: "วันนี้" / "พรุ่งนี้" / "อีก 5 วัน" (กิจกรรมที่จบแล้วคืนค่าว่าง)
function daysLeftText(event) {
  if (isPast(event)) return "";
  const days = Math.round((new Date(event.date) - new Date(today())) / (1000 * 60 * 60 * 24));
  if (days === 0) return "วันนี้";
  if (days === 1) return "พรุ่งนี้";
  return "อีก " + days + " วัน";
}

// ลบกิจกรรม และล้างข้อมูลที่เกี่ยวข้อง (รายการบันทึก/เข้าร่วมของทุกคน และคำขอที่ผูกไว้)
function deleteEvent(id) {
  saveEvents(getEvents().filter(e => e.id !== id));
  saveUsers(getUsers().map(function (u) {
    u.saved = u.saved.filter(x => x !== id);
    u.joined = u.joined.filter(x => x !== id);
    return u;
  }));
  // คำขอที่เคยใช้สร้างกิจกรรมนี้ กลับมาสร้างใหม่ได้
  saveRequests(getRequests().map(function (r) {
    if (r.eventId === id) r.eventId = null;
    return r;
  }));
}


/* ---------- 5. สถานะคำขอจัดกิจกรรม ---------- */

const REQUEST_STATUS = {
  sending: { text: "กำลังส่ง", badge: "info" },
  processing: { text: "กำลังดำเนินการ", badge: "wait" },
  approved: { text: "ดำเนินการสำเร็จ · อนุมัติ", badge: "ok" },
  rejected: { text: "ดำเนินการไม่สำเร็จ", badge: "no" }
};

function requestBadgeHTML(request) {
  const s = REQUEST_STATUS[request.status];
  return `<span class="badge ${s.badge}">${s.text}</span>`;
}

// แถบติดตามสถานะ 3 ขั้น: ส่งเรื่อง → ดำเนินการ → ผลการพิจารณา
function trackerHTML(request) {
  const level = { sending: 1, processing: 2, approved: 3, rejected: 3 }[request.status];
  const last = request.status === "approved" ? "อนุมัติ" : request.status === "rejected" ? "ไม่อนุมัติ" : "ผลการพิจารณา";
  const steps = ["กำลังส่ง", "ดำเนินการ", last];
  return `<ol class="tracker ${request.status}">` +
    steps.map((name, i) => `<li class="${i < level ? "done" : ""}"><i></i><span>${name}</span></li>`).join("") +
    `</ol>`;
}


/* ---------- 6. สร้าง HTML ของการ์ดกิจกรรม ---------- */

// กันไม่ให้ข้อความที่ผู้ใช้พิมพ์ (เช่น ชื่อกิจกรรม) กลายเป็นโค้ด HTML
function safe(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// ลิงก์ที่ปลอดภัย: http(s):// หรือหน้าในเว็บนี้ เช่น "event.html?id=e2"
// (กันลิงก์ "javascript:..." ที่รันโค้ดได้เมื่อมีคนกด)
function isWebLink(link) {
  return /^https?:\/\/\S+$/i.test(link);
}
function isSafeLink(link) {
  return isWebLink(link) || /^[\w-]+\.html([?#]\S*)?$/i.test(link);
}

// อีเมลมหาวิทยาลัย ต้องมีชื่อข้างหน้า @spumail.net
function isSpuEmail(email) {
  return /^[a-z0-9._%+-]+@spumail\.net$/i.test(email);
}

// ตัวอักษรแรกของชื่อสำหรับวงกลมรูปโปรไฟล์ (ข้ามสระหน้า เ แ โ ใ ไ เช่น "เอกชัย" → "อ")
function initialOf(name) {
  const text = String(name || "").trim().replace(/^[เแโใไ]+/, "");
  return text[0] || "?";
}

// ให้เบราว์เซอร์ดาวน์โหลดไฟล์ แล้วคืนหน่วยความจำ
function downloadFile(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename.replace(/[\\/:*?"<>|]+/g, "-"); // ตัวอักษรที่ใช้ในชื่อไฟล์ไม่ได้
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ป้ายสถานะ: เปิดรับสมัคร / ปิดรับสมัคร / จบแล้ว
function badgeHTML(event) {
  if (isOpen(event)) return '<span class="badge ok"><i class="icon icon-14 i-check"></i>เปิดรับสมัคร</span>';
  if (isPast(event)) return '<span class="badge off">จบแล้ว</span>';
  return '<span class="badge off">ปิดรับสมัคร</span>';
}

// โปสเตอร์ด้านบนการ์ด (size = "big" ใช้ในหน้ารายละเอียด)
function posterHTML(event, size = "") {
  const cat = CATEGORIES[event.cat] || CATEGORIES["วิชาการ"];
  const iconSize = size === "big" ? "icon-44" : "icon-38";
  const countdown = daysLeftText(event) ? `<em class="when">${daysLeftText(event)}</em>` : "";
  return `
    <div class="poster ${cat.color} ${size}">
      ${countdown}
      <small>SPU / ${safe(event.cat)}</small>
      <b>${safe(event.poster)}</b>
      <span>${safe(event.tagline)}</span>
      <i class="pic icon ${iconSize} ${cat.icon}"></i>
    </div>`;
}

// ส่วนเนื้อหาของการ์ด (ชื่อ วันที่ สถานที่ สถานะ)
function cardBodyHTML(event) {
  const seatsText = isOpen(event) ? `<small class="muted">เหลือ ${seatsLeft(event)} ที่</small>` : "";
  return `
    <div class="card-body">
      <h3>${safe(event.title)}</h3>
      <div class="meta"><i class="icon icon-16 i-cal"></i>${eventTime(event)}</div>
      <div class="meta"><i class="icon icon-16 i-pin"></i>${safe(event.place)}</div>
      <div class="card-foot">${badgeHTML(event)}${seatsText}</div>
    </div>`;
}

// การ์ดทั้งใบ กดแล้วไปหน้ารายละเอียด (extraHTML = ปุ่มเพิ่มเติมใต้การ์ด)
function cardHTML(event, extraHTML = "") {
  return `
    <div class="card-wrap">
      <a class="card" href="event.html?id=${event.id}">
        ${posterHTML(event)}
        ${cardBodyHTML(event)}
      </a>
      ${extraHTML}
    </div>`;
}

// โปสเตอร์ประกาศ / ประชาสัมพันธ์ 1 ใบ (กดแล้วไปหน้า news.html ดูรายละเอียด)
function newsCardHTML(news) {
  const image = news.image ? `<img class="news-img" src="${safe(news.image)}" alt="">` : "";
  return `
    <a class="news-card ${news.color}" href="news.html?id=${news.id}">
      ${image}
      <span class="pill">${safe(news.tag)}</span>
      <h3>${safe(news.title)}</h3>
      <p>${safe(news.text)}</p>
      <span class="more">ดูรายละเอียด <i class="icon icon-16 i-arrow-right"></i></span>
    </a>`;
}


/* ---------- 7. ข้อความแจ้งเตือน และ error ในฟอร์ม ---------- */

let toastTimer;

// แสดงข้อความสั้นๆ ด้านล่างจอ แล้วหายไปเอง
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

// ฝากข้อความไว้แสดงในหน้าถัดไป (ใช้ตอนเปลี่ยนหน้า เช่น หลังล็อกอิน)
function toastOnNextPage(message) {
  sessionStorage.setItem("spu_toast", message);
}

// แสดง error ในกล่อง .form-err ของฟอร์ม
function showFormError(form, message) {
  const box = form.querySelector(".form-err");
  box.textContent = message;
  box.hidden = false;
  box.classList.remove("shake");
  void box.offsetWidth; // ให้อนิเมชั่นสั่นเล่นใหม่ทุกครั้ง
  box.classList.add("shake");
}

function hideFormError(form) {
  form.querySelector(".form-err").hidden = true;
}


/* ---------- ทำงานทุกหน้าเมื่อโหลดเสร็จ ---------- */

// แสดงรูปโปรไฟล์ในวงกลม ถ้ายังไม่มีรูปใช้ตัวอักษรแรกของชื่อแทน
function showAvatar(element, user) {
  if (user.photo) {
    element.innerHTML = `<img src="${user.photo}" alt="">`;
  } else {
    element.textContent = initialOf(user.first);
  }
}

// เติมรายชื่อคณะลงในทุก <select data-faculties> (ตัวเลือกที่มีอยู่แล้ว เช่น "เลือกคณะ" ยังอยู่ด้านบน)
document.querySelectorAll("select[data-faculties]").forEach(function (select) {
  FACULTIES.forEach(function (name) {
    select.add(new Option(name, name));
  });
});

// ตั้งค่าช่องเลือก ถ้าค่าเดิมไม่มีในรายการ (เช่น คณะชื่อเก่า) เพิ่มเป็นตัวเลือกให้ ข้อมูลเดิมจะได้ไม่หาย
function setSelectValue(select, value) {
  if (value && ![...select.options].some(o => o.value === value)) {
    select.add(new Option(value, value));
  }
  select.value = value;
}

// วงกลมมุมขวาบนของทุกหน้า
const avatar = document.getElementById("avatar");
if (avatar && getCurrentUser()) {
  showAvatar(avatar, getCurrentUser());
}

// ปุ่ม "แสดง/ซ่อน" รหัสผ่าน: เพิ่มให้ทุกช่อง type="password" อัตโนมัติ
document.querySelectorAll('input[type="password"]').forEach(function (input) {
  const wrap = document.createElement("div");
  wrap.className = "pw-wrap";
  input.parentNode.insertBefore(wrap, input);
  wrap.appendChild(input);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "pw-toggle";
  button.textContent = "แสดง";
  button.addEventListener("click", function (e) {
    e.preventDefault(); // ไม่ให้ label ไปโฟกัสช่องอื่น
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    button.textContent = show ? "ซ่อน" : "แสดง";
  });
  wrap.appendChild(button);
});

// แสดงข้อความที่ฝากไว้จากหน้าก่อน
const waitingToast = sessionStorage.getItem("spu_toast");
if (waitingToast) {
  sessionStorage.removeItem("spu_toast");
  showToast(waitingToast);
}
