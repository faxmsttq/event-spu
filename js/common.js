// common.js — ฟังก์ชันและข้อมูลที่ทุกหน้าใช้ร่วมกัน
// ยังไม่มีหลังบ้าน ข้อมูลทั้งหมดเลยเก็บใน localStorage ของเบราว์เซอร์


// ---------- วันที่ ----------

// วันที่ห่างจากวันนี้ n วัน เช่น addDays(1) = พรุ่งนี้ ในรูปแบบ "2026-10-25"
function addDays(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function today() {
  return addDays(0);
}

function nowTime() {
  const d = new Date();
  return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
}


// ---------- ข้อมูลตัวอย่าง ----------
// วันที่ของกิจกรรมนับจากวันนี้ จะได้มีกิจกรรมที่กำลังจะมาให้ดูตลอด
// faculties = คณะที่ลงทะเบียนได้ (ไม่ใส่ = ทุกคณะ)

const SAMPLE_EVENTS = [
  {
    id: "e0", cat: "วิชาการ", status: "open", createdBy: null,
    title: "Workshop เขียนเรซูเม่ให้โดดเด่น", poster: "RESUME", tagline: "เตรียมตัวก่อนฝึกงาน",
    date: addDays(-15), start: "13:00", end: "15:00", place: "ห้องประชุม 2 อาคาร 11",
    cap: 60, joined: 60, organizer: "ฝ่ายแนะแนวและจัดหางาน",
    contactName: "คุณศิริพร", contactPhone: "081-111-1111", contactEmail: "career@spumail.net", formLink: "",
    desc: "เรียนรู้วิธีเขียนเรซูเม่และพอร์ตโฟลิโอให้น่าสนใจ พร้อมรีวิวเรซูเม่จริงโดยรุ่นพี่ศิษย์เก่า",
    who: "นักศึกษาชั้นปี 3-4", bring: "ไฟล์เรซูเม่ฉบับร่าง"
  },
  {
    id: "e1", cat: "วิชาการ", status: "open", createdBy: null,
    title: "อบรมการใช้ Figma เบื้องต้น", poster: "FIGMA", tagline: "เรียนรู้ ออกแบบ ลงมือทำ",
    date: addDays(0), start: "13:00", end: "16:00", place: "ห้อง 301 อาคารเทคโนโลยี",
    cap: 40, joined: 22, organizer: "ชมรมดิจิทัลดีไซน์",
    contactName: "พี่ต้นกล้า (ประธานชมรม)", contactPhone: "082-222-2222", contactEmail: "Line: @spudesign", formLink: "https://docs.google.com/forms",
    desc: "เรียนรู้พื้นฐาน Figma ตั้งแต่เฟรมและเลเยอร์ ไปจนถึงการทำต้นแบบ ลงมือทำจริงตลอดช่วงอบรม",
    who: "นักศึกษา SPU ทุกคณะ ไม่ต้องมีพื้นฐาน", bring: "โน้ตบุ๊กและบัญชี Figma ฟรี"
  },
  {
    id: "e2", cat: "ความบันเทิง", status: "open", createdBy: null,
    title: "SPU Night ลอยกระทง", poster: "SPU NIGHT", tagline: "ค่ำคืนลอยกระทงของชาว SPU",
    date: addDays(11), start: "17:00", end: "22:00", place: "ลานกิจกรรมกลาง",
    cap: 500, joined: 320, organizer: "สโมสรนักศึกษา",
    contactName: "ฝ่ายประชาสัมพันธ์สโมสร", contactPhone: "083-333-3333", contactEmail: "club@spumail.net", formLink: "https://docs.google.com/forms",
    desc: "ร่วมลอยกระทง ชมการแสดงจากชมรมดนตรี และเลือกชิมอาหารจากร้านค้านักศึกษาในค่ำคืนวันลอยกระทง",
    who: "นักศึกษาและบุคลากร SPU", bring: "กระทงจากวัสดุธรรมชาติ (มีจำหน่ายในงาน)"
  },
  {
    id: "e3", cat: "กีฬา", status: "closed", createdBy: null,
    title: "SPU Futsal Cup 2569", poster: "FUTSAL CUP", tagline: "แข่งขันระหว่างคณะ",
    date: addDays(14), start: "09:00", end: "17:00", place: "สนามกีฬาในร่ม",
    cap: 16, joined: 16, organizer: "ชมรมฟุตซอล",
    contactName: "พี่บอส", contactPhone: "084-444-4444", contactEmail: "", formLink: "",
    desc: "การแข่งขันฟุตซอลระหว่างคณะ ชิงถ้วยรางวัลและทุนการศึกษา มาเชียร์ทีมคณะของคุณกันเยอะๆ",
    who: "ทีมตัวแทนคณะ คณะละ 1-2 ทีม", bring: "ชุดกีฬาและรองเท้าฟุตซอล"
  },
  {
    id: "e4", cat: "จิตอาสา", status: "open", createdBy: null,
    title: "จิตอาสาปลูกป่าชายเลน", poster: "MANGROVE", tagline: "ร่วมปลูก ร่วมดูแลธรรมชาติ",
    date: addDays(21), start: "07:00", end: "15:00", place: "สมุทรสงคราม",
    cap: 30, joined: 25, organizer: "ชมรมอนุรักษ์ธรรมชาติ",
    contactName: "พี่ใบเตย", contactPhone: "085-555-5555", contactEmail: "green@spumail.net", formLink: "https://docs.google.com/forms",
    desc: "เดินทางไปปลูกป่าชายเลนร่วมกับชุมชนท้องถิ่น มีรถรับส่งจากมหาวิทยาลัย และนับชั่วโมงจิตอาสาได้",
    who: "นักศึกษาทุกชั้นปี", bring: "ชุดที่เปื้อนได้ หมวก ครีมกันแดด"
  },
  {
    id: "e5", cat: "วิชาการ", status: "open", createdBy: "demo@spumail.net", requestId: "r1",
    title: "ประกวดถ่ายภาพ SPU Campus", poster: "PHOTO", tagline: "เก็บมุมสวยในรั้วมหาวิทยาลัย",
    date: addDays(26), start: "10:00", end: "16:00", place: "ลานกิจกรรมกลาง",
    cap: 100, joined: 12, organizer: "ชมรมถ่ายภาพ SPU",
    contactName: "มินตรา ใจดี", contactPhone: "086-666-6666", contactEmail: "demo@spumail.net", formLink: "https://docs.google.com/forms",
    desc: "ส่งภาพถ่ายมุมโปรดในมหาวิทยาลัย ลุ้นรางวัลและจัดแสดงในนิทรรศการปลายภาค",
    who: "นักศึกษา SPU ทุกคณะ", bring: "กล้องหรือโทรศัพท์มือถือ"
  },
  {
    id: "e6", cat: "วิชาการ", status: "open", createdBy: null, faculties: ["คณะนิติศาสตร์"],
    title: "ติวเข้มก่อนสอบกฎหมายแพ่ง", poster: "LAW CAMP", tagline: "ทบทวนก่อนสอบกลางภาค",
    date: addDays(9), start: "09:00", end: "12:00", place: "ห้อง 1102 อาคาร 11",
    cap: 50, joined: 31, organizer: "สโมสรนักศึกษาคณะนิติศาสตร์",
    contactName: "พี่มายด์", contactPhone: "087-777-7777", contactEmail: "law@spumail.net", formLink: "",
    desc: "สรุปเนื้อหาสำคัญและฝึกทำข้อสอบเก่า โดยรุ่นพี่ที่ได้เกรด A",
    who: "นักศึกษาคณะนิติศาสตร์ทุกชั้นปี", bring: "ประมวลกฎหมายแพ่งและพาณิชย์"
  },
  {
    id: "e7", cat: "วิชาการ", status: "open", createdBy: null,
    title: "สัมมนา AI กับอาชีพในอนาคต", poster: "AI TALK", tagline: "เตรียมพร้อมโลกการทำงานยุค AI",
    date: addDays(3), start: "13:30", end: "16:30", place: "หอประชุมใหญ่ อาคาร 1",
    cap: 300, joined: 214, organizer: "คณะเทคโนโลยีสารสนเทศ",
    contactName: "อาจารย์วรวุฒิ", contactPhone: "02-000-0101", contactEmail: "it@spumail.net", formLink: "",
    desc: "ฟังวิทยากรจากบริษัทเทคโนโลยีเล่าว่า AI เปลี่ยนงานแต่ละสายอย่างไร และควรเตรียมทักษะอะไรตั้งแต่ตอนเรียน",
    who: "นักศึกษาทุกคณะ", bring: "-"
  },
  {
    id: "e8", cat: "วิชาการ", status: "open", createdBy: null,
    faculties: ["คณะเทคโนโลยีสารสนเทศ", "คณะวิศวกรรมศาสตร์", "คณะดิจิทัลมีเดีย"],
    title: "SPU Hackathon 24 ชั่วโมง", poster: "HACKATHON", tagline: "คิด สร้าง แข่ง ใน 1 วัน",
    date: addDays(18), start: "09:00", end: "21:00", place: "ห้องสมุด ชั้น 3 Co-working",
    cap: 60, joined: 48, organizer: "ชมรมโปรแกรมมิ่ง",
    contactName: "พี่เจมส์", contactPhone: "088-888-8888", contactEmail: "code@spumail.net", formLink: "https://docs.google.com/forms",
    desc: "รวมทีม 3-4 คน สร้างแอปแก้ปัญหาในมหาวิทยาลัยภายในวันเดียว มีพี่เลี้ยงจากบริษัทจริงช่วยดู",
    who: "นักศึกษาสาย IT วิศวะ และดิจิทัลมีเดีย", bring: "โน้ตบุ๊ก สายชาร์จ"
  },
  {
    id: "e9", cat: "กีฬา", status: "open", createdBy: null,
    title: "SPU Fun Run 5 กม.", poster: "FUN RUN", tagline: "วิ่งการกุศลรอบมหาวิทยาลัย",
    date: addDays(30), start: "06:00", end: "09:00", place: "จุดปล่อยตัว หน้าอาคาร 1",
    cap: 800, joined: 512, organizer: "ชมรมวิ่ง SPU",
    contactName: "พี่ฟ้า", contactPhone: "089-999-0000", contactEmail: "run@spumail.net", formLink: "https://docs.google.com/forms",
    desc: "วิ่งระยะ 5 กิโลเมตร รายได้มอบให้มูลนิธิเพื่อเด็ก ทุกคนที่เข้าเส้นชัยได้เหรียญที่ระลึก",
    who: "นักศึกษา บุคลากร และครอบครัว", bring: "รองเท้าวิ่ง ขวดน้ำ"
  },
  {
    id: "e10", cat: "จิตอาสา", status: "open", createdBy: null,
    title: "บริจาคโลหิต ครั้งที่ 3", poster: "GIVE BLOOD", tagline: "ให้เลือด ให้ชีวิต",
    date: addDays(5), start: "09:00", end: "15:00", place: "โถงชั้น 1 อาคาร 11",
    cap: 150, joined: 97, organizer: "ชมรมอาสาพัฒนา ร่วมกับสภากาชาดไทย",
    contactName: "พี่นุ่น", contactPhone: "081-234-0000", contactEmail: "volunteer@spumail.net", formLink: "",
    desc: "ร่วมบริจาคโลหิตกับหน่วยรับบริจาคเคลื่อนที่ ใช้เวลาประมาณ 30 นาที นับชั่วโมงจิตอาสาได้",
    who: "อายุ 17 ปีขึ้นไป น้ำหนัก 45 กก. ขึ้นไป", bring: "บัตรประชาชน และนอนหลับให้พอ"
  },
  {
    id: "e11", cat: "ความบันเทิง", status: "open", createdBy: null,
    title: "Acoustic Night ดนตรีในสวน", poster: "ACOUSTIC", tagline: "เพลงเบาๆ ใต้แสงไฟ",
    date: addDays(7), start: "18:00", end: "21:00", place: "สวนหย่อมหลังอาคาร 9",
    cap: 200, joined: 200, organizer: "ชมรมดนตรีสากล",
    contactName: "พี่โอ๊ต", contactPhone: "082-345-0000", contactEmail: "", formLink: "",
    desc: "ฟังเพลงอะคูสติกจากวงนักศึกษา มีมุมเสื่อปิกนิกและเครื่องดื่มจำหน่าย",
    who: "นักศึกษาทุกคณะ", bring: "เสื่อหรือผ้าปูนั่ง"
  },
  {
    id: "e12", cat: "กีฬา", status: "open", createdBy: null,
    title: "แข่งขัน E-Sport ROV ระหว่างคณะ", poster: "E-SPORT", tagline: "ทีมละ 5 คน ชิงเงินรางวัล",
    date: addDays(16), start: "10:00", end: "18:00", place: "ห้อง Lab คอมพิวเตอร์ อาคาร 6",
    cap: 64, joined: 40, organizer: "ชมรม E-Sport",
    contactName: "พี่ไนท์", contactPhone: "083-456-0000", contactEmail: "esport@spumail.net", formLink: "https://docs.google.com/forms",
    desc: "แข่งแบบแพ้คัดออก ถ่ายทอดสดผ่านเพจชมรม ทีมชนะเลิศรับเงินรางวัล 5,000 บาท",
    who: "นักศึกษาทุกคณะ สมัครเป็นทีม", bring: "โทรศัพท์ที่ลงเกมไว้แล้ว"
  },
  {
    id: "e13", cat: "วิชาการ", status: "open", createdBy: null,
    faculties: ["คณะนิเทศศาสตร์", "คณะดิจิทัลมีเดีย"],
    title: "Workshop ถ่ายภาพสินค้าด้วยมือถือ", poster: "PRODUCT SHOT", tagline: "ขายของออนไลน์ให้ปัง",
    date: addDays(12), start: "13:00", end: "16:00", place: "สตูดิโอ ชั้น 2 อาคาร 9",
    cap: 30, joined: 17, organizer: "คณะนิเทศศาสตร์",
    contactName: "อาจารย์ปิยะ", contactPhone: "02-000-0202", contactEmail: "comm@spumail.net", formLink: "",
    desc: "จัดแสง จัดองค์ประกอบ และแต่งภาพสินค้าด้วยแอปในมือถือ ลงมือถ่ายจริงในสตูดิโอ",
    who: "นักศึกษานิเทศศาสตร์และดิจิทัลมีเดีย", bring: "โทรศัพท์มือถือ สินค้า 1-2 ชิ้น"
  },
  {
    id: "e14", cat: "วิชาการ", status: "open", createdBy: null,
    faculties: ["คณะบัญชี", "คณะบริหารธุรกิจ"],
    title: "ปฐมนิเทศนักศึกษาฝึกงาน", poster: "INTERNSHIP", tagline: "รู้ก่อนไปฝึกงานจริง",
    date: addDays(2), start: "09:00", end: "12:00", place: "ห้องประชุม 1 อาคาร 40 ปี",
    cap: 250, joined: 133, organizer: "ฝ่ายแนะแนวและจัดหางาน",
    contactName: "คุณศิริพร", contactPhone: "081-111-1111", contactEmail: "career@spumail.net", formLink: "",
    desc: "ขั้นตอนส่งเอกสาร การประเมินผล และข้อควรรู้ก่อนเริ่มฝึกงาน พร้อมช่วงถามตอบ",
    who: "นักศึกษาบัญชีและบริหารธุรกิจที่จะฝึกงานภาคเรียนหน้า", bring: "ปากกา"
  },
  {
    id: "e15", cat: "จิตอาสา", status: "open", createdBy: null,
    title: "สอนหนังสือน้องชุมชนคลองเตย", poster: "TEACH KIDS", tagline: "แบ่งปันความรู้ให้น้อง",
    date: addDays(24), start: "09:00", end: "15:00", place: "ศูนย์เรียนรู้ชุมชนคลองเตย",
    cap: 25, joined: 9, organizer: "ชมรมอาสาพัฒนา",
    contactName: "พี่นุ่น", contactPhone: "081-234-0000", contactEmail: "volunteer@spumail.net", formLink: "",
    desc: "สอนภาษาอังกฤษและคณิตศาสตร์พื้นฐานให้น้องประถม เตรียมเกมและสื่อการสอนกันก่อนวันงาน",
    who: "นักศึกษาทุกคณะ", bring: "สื่อการสอน (ถ้ามี)"
  },
  {
    id: "e16", cat: "วิชาการ", status: "open", createdBy: null, faculties: ["คณะการสร้างเจ้าของธุรกิจ"],
    title: "Startup Pitching Day", poster: "PITCH DAY", tagline: "นำเสนอไอเดียต่อนักลงทุน",
    date: addDays(35), start: "13:00", end: "17:00", place: "หอประชุมใหญ่ อาคาร 1",
    cap: 40, joined: 22, organizer: "คณะการสร้างเจ้าของธุรกิจ",
    contactName: "อาจารย์ธนา", contactPhone: "02-000-0303", contactEmail: "eship@spumail.net", formLink: "https://docs.google.com/forms",
    desc: "ทีมละ 5 นาที นำเสนอแผนธุรกิจต่อกรรมการและนักลงทุนจริง ทีมที่ผ่านเข้ารอบได้ทุนตั้งต้น",
    who: "นักศึกษาคณะการสร้างเจ้าของธุรกิจ", bring: "สไลด์นำเสนอ"
  },
  {
    id: "e17", cat: "ความบันเทิง", status: "open", createdBy: null,
    title: "SPU Fresh Fest คอนเสิร์ตรับน้อง", poster: "FRESH FEST", tagline: "ต้อนรับน้องใหม่",
    date: addDays(-40), start: "16:00", end: "22:00", place: "ลานกิจกรรมกลาง",
    cap: 1000, joined: 950, organizer: "สโมสรนักศึกษา",
    contactName: "ฝ่ายประชาสัมพันธ์สโมสร", contactPhone: "083-333-3333", contactEmail: "club@spumail.net", formLink: "",
    desc: "คอนเสิร์ตต้อนรับน้องใหม่ พร้อมบูธชมรมกว่า 40 ชมรม",
    who: "นักศึกษาทุกชั้นปี", bring: "-"
  }
];

// คำขอจัดกิจกรรม status: sending = กำลังส่ง, processing = ดำเนินการ, approved = อนุมัติ, rejected = ไม่อนุมัติ
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
  },
  {
    id: "r4", createdBy: "demo@spumail.net", toFaculty: "คณะนิเทศศาสตร์", status: "sending", note: "", eventId: null,
    title: "เสวนา Content Creator รุ่นใหม่", desc: "เชิญครีเอเตอร์ศิษย์เก่ามาเล่าประสบการณ์ทำคอนเทนต์และหารายได้",
    date: addDays(28), start: "13:00", end: "16:00", place: "ห้องประชุม 2 อาคาร 9",
    organizer: "ชมรมสื่อสร้างสรรค์", payer: "งบชมรม", budget: 8000, people: 120,
    submittedAt: addDays(0)
  },
  {
    id: "r5", createdBy: "demo@spumail.net", toFaculty: "คณะนิเทศศาสตร์", status: "approved", note: "", eventId: null,
    title: "Workshop ตัดต่อวิดีโอสั้นด้วยมือถือ", desc: "สอนถ่ายและตัดต่อคลิปสั้นลงโซเชียล ใช้แอปฟรีในมือถือ",
    date: addDays(20), start: "13:00", end: "16:00", place: "ห้อง Lab สื่อ อาคาร 9",
    organizer: "ชมรมสื่อสร้างสรรค์", payer: "งบชมรม", budget: 3000, people: 40,
    submittedAt: addDays(-7)
  }
];

// text = ข้อความสั้นบนการ์ด, detail = เนื้อหาในหน้า news.html
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
  },
  {
    id: "n4", tag: "ประชาสัมพันธ์", color: "c-sport", image: "", link: "event.html?id=e9",
    title: "SPU Fun Run เปิดรับสมัครแล้ว",
    text: "วิ่ง 5 กม. รอบมหาวิทยาลัย รายได้มอบให้มูลนิธิเพื่อเด็ก",
    detail: "รับเหรียญที่ระลึกทุกคนที่เข้าเส้นชัย\nจำนวนจำกัด 800 คน สมัครก่อนได้ก่อน"
  }
];

const SAMPLE_USER = {
  email: "demo@spumail.net", password: "password123", role: "student",
  first: "มินตรา", last: "ใจดี", studentId: "66123456", faculty: "คณะนิเทศศาสตร์", year: "ปี 2",
  showName: true, notify: true,
  saved: ["e1", "e4", "e7"],
  joined: ["e0", "e1", "e4", "e17"]
};

const SAMPLE_ADMIN = {
  email: "admin@spumail.net", password: "admin1234", role: "admin",
  first: "แอดมิน", last: "SPU Event", studentId: "", faculty: "ฝ่ายกิจการนักศึกษา", year: "",
  showName: true, notify: true, saved: [], joined: []
};

// อาจารย์ตัวอย่าง คณะเดียวกับคำขอตัวอย่าง จะได้ลองอนุมัติได้เลย
const SAMPLE_STAFF = {
  email: "teacher@spumail.ac.th", password: "teacher1234", role: "staff", position: "อาจารย์",
  first: "สมชาย", last: "ใจกว้าง", studentId: "", faculty: "คณะนิเทศศาสตร์", year: "",
  showName: true, notify: true, saved: [], joined: []
};

const ADMIN_CONTACT = {
  name: "ฝ่ายกิจการนักศึกษา (ผู้ดูแลระบบ)",
  email: "admin@spumail.net",
  phone: "02-000-0000 (ตัวอย่าง)",
  line: "@spuevent",
  hours: "จันทร์-ศุกร์ 08:30-16:30 น.",
  place: "อาคาร 1 ชั้น 2 ห้องกิจการนักศึกษา"
};

// ใช้ในช่องเลือกคณะทุกหน้า แก้ที่นี่ที่เดียว
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

// สีโปสเตอร์ (class ใน CSS) และไอคอนของแต่ละหมวด
const CATEGORIES = {
  "วิชาการ": { color: "c-aca", icon: "i-pen" },
  "ความบันเทิง": { color: "c-fun", icon: "i-sparkle" },
  "กีฬา": { color: "c-sport", icon: "i-trophy" },
  "จิตอาสา": { color: "c-vol", icon: "i-leaf" }
};


// ---------- อ่าน / บันทึกข้อมูล ----------

function loadData(key, defaultValue) {
  const text = localStorage.getItem(key);
  if (text === null) return defaultValue;
  try {
    const value = JSON.parse(text);
    if (Array.isArray(defaultValue) && !Array.isArray(value)) return defaultValue;
    return value;
  } catch (error) {
    return defaultValue; // ข้อมูลเสีย ใช้ค่าเริ่มต้นแทน หน้าเว็บจะได้ไม่พัง
  }
}

function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getEvents() { return loadData("spu4_events", SAMPLE_EVENTS); }
function saveEvents(events) { saveData("spu4_events", events); }
function getEventById(id) { return getEvents().find(e => e.id === id); }
function updateEvent(changed) { saveEvents(getEvents().map(e => e.id === changed.id ? changed : e)); }

function getRequests() { return loadData("spu4_requests", SAMPLE_REQUESTS); }
function saveRequests(requests) { saveData("spu4_requests", requests); }
function getRequestById(id) { return getRequests().find(r => r.id === id); }
function updateRequest(changed) { saveRequests(getRequests().map(r => r.id === changed.id ? changed : r)); }

function getNews() { return loadData("spu4_news", SAMPLE_NEWS); }
function saveNews(news) { saveData("spu4_news", news); }

function getUsers() { return loadData("spu4_users", [SAMPLE_USER, SAMPLE_ADMIN, SAMPLE_STAFF]); }
function saveUsers(users) { saveData("spu4_users", users); }


// ---------- ผู้ใช้ ----------
// ตอนล็อกอินจะเก็บอีเมลไว้ใน "spu4_login"

function getCurrentUser() {
  const email = localStorage.getItem("spu4_login");
  return getUsers().find(u => u.email === email) || null;
}

function updateCurrentUser(changed) {
  saveUsers(getUsers().map(u => u.email === changed.email ? changed : u));
}

function login(email) { localStorage.setItem("spu4_login", email); }
function logout() { localStorage.removeItem("spu4_login"); }

function isAdmin(user) {
  return user !== null && user.role === "admin";
}

// อาจารย์ / เจ้าหน้าที่ (user.position บอกว่าเป็นอะไร)
function isStaff(user) {
  return user !== null && user.role === "staff";
}

function isStaffEmail(email) {
  return /^[a-z0-9._%+-]+@spumail\.ac\.th$/i.test(email);
}

// หน้าแรกหลังล็อกอินของแต่ละประเภทบัญชี
function homePageOf(user) {
  if (isAdmin(user)) return "admin.html";
  if (isStaff(user)) return "review.html";
  return "events.html";
}

// หน้าที่ต้องล็อกอินก่อน ถ้ายังไม่ล็อกอินจะเด้งไปหน้า login แล้วหยุดโค้ดที่เหลือ
function requireLogin() {
  const user = getCurrentUser();
  if (user === null) {
    location.replace("login.html");
    throw new Error("ยังไม่ได้เข้าสู่ระบบ");
  }
  return user;
}

function requireAdmin() {
  const user = requireLogin();
  if (!isAdmin(user)) {
    location.replace(homePageOf(user));
    throw new Error("เฉพาะผู้ดูแลระบบ");
  }
  return user;
}

function requireStaff() {
  const user = requireLogin();
  if (!isStaff(user)) {
    location.replace(homePageOf(user));
    throw new Error("เฉพาะอาจารย์และเจ้าหน้าที่");
  }
  return user;
}


// ---------- กิจกรรม ----------

const MONTHS = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

// "2026-10-25" เป็น "25 ต.ค. 2569"
function thaiDate(dateText) {
  const [y, m, d] = dateText.split("-").map(Number);
  return d + " " + MONTHS[m - 1] + " " + (y + 543);
}

function eventTime(event) {
  return thaiDate(event.date) + " " + event.start + "-" + event.end;
}

function seatsLeft(event) {
  return event.cap - event.joined;
}

// จบแล้ว = เลยวันไปแล้ว หรือเป็นวันนี้แต่เลยเวลาเลิกแล้ว
function isPast(event) {
  return event.date < today() || (event.date === today() && event.end <= nowTime());
}

function isOpen(event) {
  return event.status === "open" && seatsLeft(event) > 0 && !isPast(event);
}

// กิจกรรมที่สร้างใหม่จะเป็น "pending" จนกว่าแอดมินจะอนุมัติ ระหว่างนั้นคนอื่นยังมองไม่เห็น
// ถ้าแอดมินไม่อนุมัติจะเป็น "rejected"
function isPublished(event) {
  return event.status === "open" || event.status === "closed";
}

function canSee(event, user) {
  return isPublished(event) || event.createdBy === user.email || isAdmin(user);
}

function isFacultyOnly(event) {
  return Array.isArray(event.faculties) && event.faculties.length > 0;
}

function facultyAllowed(event, user) {
  return !isFacultyOnly(event) || event.faculties.includes(user.faculty);
}

function facultyText(event) {
  return isFacultyOnly(event) ? "เฉพาะ " + event.faculties.join(", ") : "ทุกคณะ";
}

// ช่อง "ใครลงทะเบียนได้" ใช้ในหน้ายื่นคำขอกับหน้าสร้างกิจกรรม
// ในฟอร์มต้องมี radio name="audience", <div id="facultyBox"> และ <div id="facultyList">
function setupFacultyPicker(form, faculties) {
  const locked = faculties.length > 0;
  form.elements.audience.value = locked ? "faculty" : "all";
  // ยังไม่ได้ล็อก ก็ติ๊กคณะของตัวเองไว้ให้ก่อน เผื่อเปลี่ยนใจกดล็อก
  const checked = locked ? faculties : [getCurrentUser().faculty];
  document.getElementById("facultyList").innerHTML = FACULTIES.map(name =>
    `<label class="check"><input type="checkbox" name="faculties" value="${safe(name)}"${checked.includes(name) ? " checked" : ""}> ${safe(name)}</label>`
  ).join("");

  const update = () => document.getElementById("facultyBox").hidden = form.elements.audience.value !== "faculty";
  form.querySelectorAll('input[name="audience"]').forEach(radio => radio.addEventListener("change", update));
  update();
}

// คณะที่ติ๊กไว้ (ถ้าเลือก "ทุกคณะ" ได้รายการว่าง)
function pickedFaculties(form) {
  if (form.elements.audience.value !== "faculty") return [];
  return [...form.querySelectorAll('input[name="faculties"]:checked')].map(box => box.value);
}

function sortByDate(events) {
  return events.sort((a, b) => (a.date + a.start) < (b.date + b.start) ? -1 : 1);
}

function daysLeftText(event) {
  if (isPast(event)) return "";
  const days = Math.round((new Date(event.date) - new Date(today())) / 86400000);
  if (days === 0) return "วันนี้";
  if (days === 1) return "พรุ่งนี้";
  return "อีก " + days + " วัน";
}

// ลบกิจกรรม แล้วเอาออกจากรายการบันทึก/เข้าร่วมของทุกคน
// คำขอที่ใช้สร้างกิจกรรมนี้จะกลับมาสร้างใหม่ได้
function deleteEvent(id) {
  saveEvents(getEvents().filter(e => e.id !== id));
  saveUsers(getUsers().map(function (u) {
    u.saved = u.saved.filter(x => x !== id);
    u.joined = u.joined.filter(x => x !== id);
    return u;
  }));
  saveRequests(getRequests().map(function (r) {
    if (r.eventId === id) r.eventId = null;
    return r;
  }));
}


// ---------- คำขอจัดกิจกรรม ----------

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

// แถบสถานะ 3 ขั้น: กำลังส่ง, ดำเนินการ, ผลการพิจารณา
function trackerHTML(request) {
  const level = { sending: 1, processing: 2, approved: 3, rejected: 3 }[request.status];
  let last = "ผลการพิจารณา";
  if (request.status === "approved") last = "อนุมัติ";
  if (request.status === "rejected") last = "ไม่อนุมัติ";
  const steps = ["กำลังส่ง", "ดำเนินการ", last];
  return `<ol class="tracker ${request.status}">` +
    steps.map((name, i) => `<li class="${i < level ? "done" : ""}"><i></i><span>${name}</span></li>`).join("") +
    `</ol>`;
}


// คนพิจารณาคำขอ: แอดมินได้ทุกคณะ อาจารย์/เจ้าหน้าที่ได้เฉพาะคำขอที่ส่งถึงคณบดีคณะตัวเอง
function canReview(user, request) {
  return isAdmin(user) || (isStaff(user) && request.toFaculty === user.faculty);
}

// คำขอที่ยังไม่ได้พิจารณาขึ้นก่อน
function sortForReview(requests) {
  const order = { sending: 0, processing: 1, rejected: 2, approved: 2 };
  return requests.sort((a, b) => order[a.status] - order[b.status]);
}

// การ์ดคำขอในหน้าแอดมินกับหน้าอาจารย์ ปุ่มจะเรียก setStatus(id, status) ที่แต่ละหน้าเขียนเอง
function reviewCardHTML(r) {
  const owner = getUsers().find(u => u.email === r.createdBy);
  const ownerName = owner ? owner.first + " " + owner.last : r.createdBy;

  let actions = `<p class="muted" style="margin-top: 12px">${r.reviewedBy ? "พิจารณาโดย " + safe(r.reviewedBy) : "พิจารณาแล้ว"}</p>`;
  if (r.status === "sending" || r.status === "processing") {
    actions = `<div class="req-acts">
        ${r.status === "sending" ? `<button class="btn ghost" onclick="setStatus('${r.id}', 'processing')">รับเรื่อง (ดำเนินการ)</button>` : ""}
        <button class="btn primary" onclick="setStatus('${r.id}', 'approved')">อนุมัติ</button>
        <button class="btn danger-outline" onclick="setStatus('${r.id}', 'rejected')">ไม่อนุมัติ</button>
      </div>`;
  }

  return `
    <article class="box req">
      <div class="req-head">
        <div>
          <h3>${safe(r.title)}</h3>
          <small class="muted">ผู้ยื่น: ${safe(ownerName)} · ถึงคณบดี${safe(r.toFaculty)} · ${thaiDate(r.submittedAt)}</small>
        </div>
        ${requestBadgeHTML(r)}
      </div>
      ${trackerHTML(r)}
      <p class="muted" style="margin-top: 10px">${safe(r.desc)}</p>
      <dl class="info-list">
        <div><dt>วันเวลา</dt><dd>${eventTime(r)}</dd></div>
        <div><dt>สถานที่</dt><dd>${safe(r.place)}</dd></div>
        <div><dt>ผู้จัดงาน</dt><dd>${safe(r.organizer)}</dd></div>
        <div><dt>ผู้รับผิดชอบค่าใช้จ่าย</dt><dd>${safe(r.payer)}${r.budget ? " · งบ " + r.budget.toLocaleString() + " บาท" : ""}</dd></div>
        <div><dt>จำนวนคน</dt><dd>${r.people} คน</dd></div>
        <div><dt>ใครลงทะเบียนได้</dt><dd>${safe(facultyText(r))}</dd></div>
      </dl>
      ${r.status === "rejected" ? `<p class="notice err">เหตุผล: ${safe(r.note)}</p>` : ""}
      ${actions}
    </article>`;
}

// เปลี่ยนสถานะคำขอ (เช็กสิทธิ์ก่อนทุกครั้ง) คืน true ถ้าเปลี่ยนแล้ว
function reviewRequest(id, status) {
  const user = getCurrentUser();
  const request = getRequestById(id);
  if (!request || !canReview(user, request)) return false;

  if (status === "rejected") {
    const reason = prompt("เหตุผลที่ไม่อนุมัติ (ผู้ยื่นจะเห็นข้อความนี้)");
    if (reason === null || reason.trim() === "") return false;
    request.note = reason.trim();
  }
  request.status = status;
  request.reviewedBy = user.first + " " + user.last;
  updateRequest(request);
  showToast("เปลี่ยนสถานะเป็น \"" + REQUEST_STATUS[status].text + "\" แล้ว");
  return true;
}


// ---------- ตัวช่วยทั่วไป ----------

// กันข้อความที่ผู้ใช้พิมพ์ไม่ให้กลายเป็น HTML
function safe(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function isWebLink(link) {
  return /^https?:\/\/\S+$/i.test(link);
}

// ลิงก์ภายนอก หรือหน้าในเว็บนี้ เช่น event.html?id=e2 (กันลิงก์แบบ javascript:)
function isSafeLink(link) {
  return isWebLink(link) || /^[\w-]+\.html([?#]\S*)?$/i.test(link);
}

function isSpuEmail(email) {
  return /^[a-z0-9._%+-]+@spumail\.net$/i.test(email);
}

// ตัวอักษรแรกของชื่อ ข้ามสระหน้า เช่น "เอกชัย" ได้ "อ"
function initialOf(name) {
  const text = String(name || "").trim().replace(/^[เแโใไ]+/, "");
  return text[0] || "?";
}

// ย่อรูปให้กว้างไม่เกิน maxWidth แล้วได้เป็นข้อความ (data URL) ที่เก็บใน localStorage ได้
// ต้องย่อเพราะ localStorage เก็บได้แค่ประมาณ 5MB
function resizeImage(file, maxWidth, done) {
  const reader = new FileReader();
  reader.onload = function () {
    const img = new Image();
    img.onload = function () {
      const scale = Math.min(1, maxWidth / img.width);
      const canvas = document.createElement("canvas");
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#fff"; // พื้นขาว กันรูป PNG พื้นใสกลายเป็นสีดำ
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      done(canvas.toDataURL("image/jpeg", 0.8));
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

function downloadFile(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename.replace(/[\\/:*?"<>|]+/g, "-");
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}


// ---------- HTML ที่ใช้ซ้ำ ----------

function badgeHTML(event) {
  if (event.status === "pending") return '<span class="badge wait">รอแอดมินอนุมัติ</span>';
  if (event.status === "rejected") return '<span class="badge no">ไม่อนุมัติ</span>';
  if (isOpen(event)) return '<span class="badge ok"><i class="icon icon-14 i-check"></i>เปิดรับสมัคร</span>';
  if (isPast(event)) return '<span class="badge off">จบแล้ว</span>';
  return '<span class="badge off">ปิดรับสมัคร</span>';
}

function posterHTML(event, size = "") {
  const cat = CATEGORIES[event.cat] || CATEGORIES["วิชาการ"];
  const countdown = daysLeftText(event) ? `<em class="when">${daysLeftText(event)}</em>` : "";
  // ผู้จัดอัปโหลดรูปโปสเตอร์มา ใช้รูปแทนโปสเตอร์สี
  if (event.image) {
    return `<div class="poster has-img ${size}">${countdown}<img src="${safe(event.image)}" alt="${safe(event.title)}"></div>`;
  }
  return `
    <div class="poster ${cat.color} ${size}">
      ${countdown}
      <small>SPU / ${safe(event.cat)}</small>
      <b>${safe(event.poster)}</b>
      <span>${safe(event.tagline)}</span>
      <i class="pic icon ${size === "big" ? "icon-44" : "icon-38"} ${cat.icon}"></i>
    </div>`;
}

function cardBodyHTML(event) {
  const seats = isOpen(event) ? `<small class="muted">เหลือ ${seatsLeft(event)} ที่</small>` : "";
  const lock = isFacultyOnly(event) ? `<div class="meta lock"><i class="icon icon-16 i-lock"></i>${safe(facultyText(event))}</div>` : "";
  return `
    <div class="card-body">
      <h3>${safe(event.title)}</h3>
      <div class="meta"><i class="icon icon-16 i-cal"></i>${eventTime(event)}</div>
      <div class="meta"><i class="icon icon-16 i-pin"></i>${safe(event.place)}</div>
      ${lock}
      <div class="card-foot">${badgeHTML(event)}${seats}</div>
    </div>`;
}

// extraHTML = ปุ่มเพิ่มเติมใต้การ์ด เช่น "นำออกจากรายการ"
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

function showAvatar(element, user) {
  if (user.photo) element.innerHTML = `<img src="${user.photo}" alt="">`;
  else element.textContent = initialOf(user.first);
}

// ถ้าค่าเดิมไม่มีในตัวเลือก (เช่น ชื่อคณะเก่า) ให้เพิ่มเข้าไป ข้อมูลเดิมจะได้ไม่หาย
function setSelectValue(select, value) {
  if (value && ![...select.options].some(o => o.value === value)) {
    select.add(new Option(value, value));
  }
  select.value = value;
}


// ---------- ข้อความแจ้งเตือน ----------

let toastTimer;

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

// เก็บข้อความไว้โชว์ตอนเปิดหน้าถัดไป เช่น หลังล็อกอิน
function toastOnNextPage(message) {
  sessionStorage.setItem("spu_toast", message);
}

function showFormError(form, message) {
  const box = form.querySelector(".form-err");
  box.textContent = message;
  box.hidden = false;
  box.classList.remove("shake");
  void box.offsetWidth; // ให้อนิเมชันสั่นเล่นใหม่ทุกครั้ง
  box.classList.add("shake");
}

function hideFormError(form) {
  form.querySelector(".form-err").hidden = true;
}


// ---------- ทำงานตอนโหลดทุกหน้า ----------

document.querySelectorAll("select[data-faculties]").forEach(function (select) {
  FACULTIES.forEach(name => select.add(new Option(name, name)));
});

const avatar = document.getElementById("avatar");
if (avatar && getCurrentUser()) {
  showAvatar(avatar, getCurrentUser());
}

// ปุ่มแสดง/ซ่อน ในทุกช่องรหัสผ่าน
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
    e.preventDefault();
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    button.textContent = show ? "ซ่อน" : "แสดง";
  });
  wrap.appendChild(button);
});

const waitingToast = sessionStorage.getItem("spu_toast");
if (waitingToast) {
  sessionStorage.removeItem("spu_toast");
  showToast(waitingToast);
}
