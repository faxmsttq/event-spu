// lang.js — ปุ่มเปลี่ยนภาษา ไทย / English
// หน้าเว็บเขียนเป็นภาษาไทยปกติ ถ้าเลือก English จะเอาข้อความบนหน้าไปเทียบกับตาราง EN แล้วเปลี่ยนให้
// ชื่อกิจกรรมหรือข้อความที่ผู้ใช้พิมพ์เองไม่มีในตาราง เลยไม่ถูกแปล

const LANG = localStorage.getItem("spu_lang") || "th";

// ตารางคำแปล: "ข้อความไทย": "English"
const EN = {
  // เมนู / ทั่วไป
  "กิจกรรม": "Events", "บันทึกไว้": "Saved", "ของฉัน": "My events", "แจ้งเตือน": "Notifications", "โปรไฟล์": "Profile",
  "สร้างกิจกรรม": "Create event", "เข้าสู่ระบบ": "Log in", "สมัครสมาชิก": "Sign up", "ออกจากระบบ": "Log out",
  "ยกเลิก": "Cancel", "ย้อนกลับ": "Back", "ถัดไป": "Next", "บันทึก": "Save", "ทั้งหมด": "All",
  "แสดง": "Show", "ซ่อน": "Hide", "ไปหน้ากิจกรรม": "Go to events", "กลับหน้าหลัก": "Back to home",
  "กลับไปหน้ากิจกรรม": "Back to events", "กลับไปหน้าคำขอ": "Back to requests", "กลับไปหน้าเข้าสู่ระบบ": "Back to log in",
  "© SPU Event · ข้อมูลกิจกรรมเป็นข้อมูลตัวอย่าง": "© SPU Event · Event data is sample data",
  "ข้อมูลกิจกรรมเป็นข้อมูลตัวอย่าง": "Event data is sample data",

  // หมวดหมู่ / สถานะ
  "วิชาการ": "Academic", "ความบันเทิง": "Entertainment", "กีฬา": "Sports", "จิตอาสา": "Volunteer",
  "เปิดรับสมัคร": "Open", "ปิดรับสมัคร": "Closed", "จบแล้ว": "Ended", "วันนี้": "Today", "พรุ่งนี้": "Tomorrow",
  "เฉพาะที่เปิดรับ": "Open only", "ทุกคณะ": "All faculties",

  // คณะ / ชั้นปี
  "-- เลือกคณะ --": "-- Select faculty --", "คณะ/สาขา": "Faculty", "ชั้นปี": "Year", "ปี 5 ขึ้นไป": "Year 5+",
  "คณะการสร้างเจ้าของธุรกิจ": "School of Entrepreneurship", "คณะดิจิทัลมีเดีย": "School of Digital Media",
  "คณะนิเทศศาสตร์": "School of Communication Arts", "คณะบริหารธุรกิจ": "School of Business Administration",
  "คณะเทคโนโลยีสารสนเทศ": "School of Information Technology",
  "วิทยาลัยการบิน การท่องเที่ยวและการบริการ": "College of Aviation, Tourism and Hospitality",
  "วิทยาลัยโลจิสติกส์ การบิน และสมาร์ทโมบิลิตี้": "College of Logistics, Aviation and Smart Mobility",
  "คณะศิลปศาสตร์": "School of Liberal Arts", "คณะการออกแบบและสถาปัตยกรรมศาสตร์": "School of Design and Architecture",
  "คณะบัญชี": "School of Accountancy", "คณะนิติศาสตร์": "School of Law", "คณะวิศวกรรมศาสตร์": "School of Engineering",
  "ฝ่ายกิจการนักศึกษา": "Student Affairs", "ฝ่ายกิจการนักศึกษา (ผู้ดูแลระบบ)": "Student Affairs (Administrator)",

  // หน้าแรก
  "สำหรับนักศึกษา SPU": "For SPU students", "ทุกกิจกรรมในมหาวิทยาลัย": "Every campus event", "อยู่ในที่เดียว": "in one place",
  "ค้นหา สมัคร และสร้างกิจกรรมได้ง่ายๆ ไม่พลาดทุกงานที่ใช่ เจอเพื่อนใหม่ และเก็บประสบการณ์ไว้ด้วยกัน": "Find, join and create events easily. Never miss the right one, meet new friends and collect experiences together.",
  "เริ่มใช้งานฟรี": "Get started free", "120+ กิจกรรมต่อภาคเรียน · ข้อมูลตัวอย่าง": "120+ events per semester · sample data",
  "ทำไมต้อง SPU Event": "Why SPU Event", "ค้นหาง่าย": "Easy to find",
  "กรองตามหมวดหมู่ วันที่ และสถานะ เจอกิจกรรมที่ใช่ในไม่กี่วินาที": "Filter by category, date and status. Find the right event in seconds.",
  "สมัครในไม่กี่คลิก": "Join in a few clicks", "กดยืนยันครั้งเดียว ดูกิจกรรมที่เข้าร่วมได้ที่หน้าของฉัน": "Confirm once and see your events on the My events page.",
  "สร้างกิจกรรมเอง": "Create your own", "ยื่นขออนุมัติคณบดีผ่านระบบ อนุมัติแล้วโพสต์เปิดรับสมัครได้ทันที": "Request the Dean's approval online, then post and open registration right away.",
  "เริ่มต้นใน 3 ขั้นตอน": "Get started in 3 steps", "สมัครสมาชิกด้วยอีเมลมหาวิทยาลัย": "Sign up with your university email",
  "เลือกกิจกรรมที่สนใจ": "Pick an event you like", "กดเข้าร่วมแล้วไปงานได้เลย": "Join and show up",
  "พร้อมหากิจกรรมแรกของคุณหรือยัง?": "Ready to find your first event?", "สมัครฟรี ใช้เวลาไม่ถึงหนึ่งนาที": "Free, takes less than a minute",

  // เข้าสู่ระบบ / สมัครสมาชิก / ลืมรหัสผ่าน
  "ยินดีต้อนรับกลับมา": "Welcome back", "ดูกิจกรรมที่คุณสนใจ": "See events you like", "เก็บกิจกรรมที่บันทึกไว้": "Keep saved events",
  "ติดตามสถานะการสมัคร": "Track your registrations", "ใช้อีเมลมหาวิทยาลัยของคุณ": "Use your university email",
  "อีเมลมหาวิทยาลัย": "University email", "รหัสผ่าน": "Password", "ลืมรหัสผ่าน?": "Forgot password?",
  "ลองใช้บัญชีนักศึกษา": "Try student account", "ลองใช้บัญชีแอดมิน": "Try admin account",
  "สร้างกิจกรรมแล้ว รอแอดมินอนุมัติโพสต์": "Event created, waiting for the admin to approve it", "แก้ไขแล้วส่งใหม่": "Edit and resubmit",
  "ถ้าไม่ใส่ จะใช้โปสเตอร์สีตามหมวดหมู่แทน": "If empty, a colored poster for the category is used",
  "แนะนำรูปแนวนอน 16:9 เช่น 1200 × 675 พิกเซล (JPG / PNG) บนการ์ดจะเห็นเฉพาะช่วงกลางของรูป ส่วนหน้ารายละเอียดเห็นเต็มรูป": "Landscape 16:9 recommended, e.g. 1200 × 675 px (JPG / PNG). Cards show only the middle of the image; the details page shows all of it.",
  "แนะนำรูปแนวนอน 16:9 เช่น 1200 × 675 พิกเซล (JPG / PNG) รูปจะถูกย่อให้เล็กลงอัตโนมัติ": "Landscape 16:9 recommended, e.g. 1200 × 675 px (JPG / PNG). Images are resized automatically.",
  "พื้นที่เก็บข้อมูลเต็ม ลองใช้รูปโปสเตอร์ที่เล็กลง": "Storage is full. Try a smaller poster image",
  "โปสเตอร์": "Poster",
  "ต้องการเปลี่ยนรหัสนักศึกษา คณะ หรือชั้นปี กรุณาติดต่อแอดมิน (ช่องทางติดต่ออยู่ด้านล่าง)": "To change your student ID, faculty or year, please contact the admin (contact details below).",
  "ผู้ใช้": "Users", "ค้นหาชื่อ อีเมล หรือรหัสนักศึกษา": "Search by name, email or student ID", "ไม่พบผู้ใช้": "No users found",
  "นักศึกษา": "Student", "คณะ": "Faculty",

  // อาจารย์ / เจ้าหน้าที่
  "อาจารย์": "Lecturer", "เจ้าหน้าที่": "Staff", "ตำแหน่ง": "Position", "สังกัดคณะ": "Faculty",
  "สำหรับอาจารย์และเจ้าหน้าที่": "For lecturers and staff", "เข้าสู่ระบบอาจารย์ / เจ้าหน้าที่": "Lecturer / staff log in",
  "สมัครอาจารย์ / เจ้าหน้าที่": "Lecturer / staff sign up", "สมัครสำหรับอาจารย์และเจ้าหน้าที่": "Sign up as lecturer or staff",
  "สมัครสำหรับอาจารย์ / เจ้าหน้าที่": "Sign up as lecturer / staff", "ใช้อีเมลบุคลากร @spumail.ac.th": "Use your staff email @spumail.ac.th",
  "อีเมลบุคลากร": "Staff email", "ลองใช้บัญชีอาจารย์ตัวอย่าง": "Try sample lecturer account", "เป็นนักศึกษา?": "Are you a student?",
  "เข้าสู่ระบบนักศึกษา": "Student log in", "อาจารย์ / เจ้าหน้าที่?": "Lecturer / staff?", "เข้าสู่ระบบบุคลากร": "Staff log in", "สมัคร": "Sign up",
  "ดูคำขอจัดกิจกรรมของคณะ": "See event requests for your faculty", "อนุมัติหรือไม่อนุมัติคำขอ": "Approve or reject requests",
  "เห็นเฉพาะคำขอที่ส่งถึงคณะของคุณ": "Only requests sent to your faculty", "เลือกคณะที่สังกัด": "Choose your faculty",
  "อนุมัติได้เฉพาะคำขอของคณะตัวเอง": "Approve only your own faculty's requests",
  "อนุมัติได้เฉพาะคำขอที่ส่งถึงคณะนี้ เปลี่ยนภายหลังต้องติดต่อแอดมิน": "You can only approve requests sent to this faculty. Contact the admin to change it later.",
  "กรุณาใช้อีเมลบุคลากร (@spumail.ac.th)": "Please use your staff email (@spumail.ac.th)",
  "พิจารณาคำขอ": "Review requests", "พิจารณาคำขอจัดกิจกรรม": "Review event requests", "พิจารณาคำขอของคณะ": "Review faculty requests",
  "รอพิจารณา": "Waiting", "อนุมัติแล้ว": "Approved", "ไม่มีคำขอรอพิจารณา": "No requests waiting", "ยังไม่มีคำขอที่พิจารณาแล้ว": "No reviewed requests yet",

  "ข้อมูลจากคำขอ": "From your request", "แก้ไม่ได้ ถ้าต้องการเปลี่ยนให้ยื่นคำขอใหม่": "Can't be edited here. Send a new request to change it.",
  "ข้อมูลเพิ่มเติม": "More details", "ตรวจสอบก่อนส่ง": "Review before sending",
  "วันจัดงานในคำขอผ่านไปแล้ว กรุณายื่นคำขอใหม่": "The event date in this request has passed. Please send a new request.",
  "รอแอดมินอนุมัติ": "Awaiting admin approval", "รออนุมัติโพสต์": "Pending posts", "กิจกรรมรออนุมัติ": "Events waiting",
  "อนุมัติโพสต์": "Approve post", "ไม่มีกิจกรรมรออนุมัติ": "No events waiting for approval", "ส่งให้แอดมินอนุมัติ": "Send for admin approval",
  "ส่งกิจกรรมให้แอดมินอนุมัติแล้ว": "Sent to the admin for approval", "อนุมัติแล้ว กิจกรรมเปิดรับสมัครแล้ว": "Approved. Registration is now open",
  "ไม่อนุมัติกิจกรรมนี้แล้ว": "Event rejected", "อนุมัติแล้วกิจกรรมจะเปิดรับสมัครทันที": "Registration opens as soon as it's approved",
  "รอแอดมินอนุมัติ ตอนนี้มีแค่คนสร้างกับแอดมินที่เห็นกิจกรรมนี้": "Awaiting admin approval. Only you and the admin can see this event.",
  "กด \"ส่งให้แอดมินอนุมัติ\" แล้วแอดมินจะตรวจสอบก่อน เมื่ออนุมัติแล้วกิจกรรมจะแสดงให้ทุกคนเห็นและเปิดรับสมัคร": "Press \"Send for admin approval\". Once approved, the event becomes visible to everyone with registration open.",
  "ยังไม่มีบัญชี?": "No account yet?", "ลืมรหัสผ่าน": "Forgot password", "ลบ": "Delete", "มีบัญชีอยู่แล้ว?": "Already have an account?",
  "สร้างบัญชีใน 1 นาที": "Create an account in 1 minute", "ใช้อีเมลมหาวิทยาลัยยืนยันตัวตน": "Verify with your university email",
  "สมัครกิจกรรมได้ทันที": "Join events right away", "สร้างกิจกรรมของคุณเองได้": "Create your own events",
  "ชื่อ": "First name", "นามสกุล": "Last name", "รหัสนักศึกษา": "Student ID", "ตัวเลข 8 หลัก": "8 digits",
  "รหัสผ่าน (อย่างน้อย 8 ตัว)": "Password (at least 8 characters)", "ยืนยันรหัสผ่าน": "Confirm password",
  "ฉันยอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว": "I accept the terms and privacy policy",
  "ตั้งรหัสผ่านใหม่": "Reset password", "เราจะส่งลิงก์ตั้งรหัสผ่านใหม่ไปที่อีเมลของคุณ": "We'll email you a link to reset your password",
  "ส่งลิงก์": "Send link", "กรอกอีเมลที่ใช้สมัคร": "Enter the email you signed up with",
  "รับลิงก์ตั้งรหัสผ่านใหม่ทางอีเมล": "Get a reset link by email", "กลับมาเข้าสู่ระบบได้ทันที": "Log in again right away",

  // หน้ากิจกรรม
  "สนใจทำกิจกรรมอะไรดี?": "What would you like to do?", 
  "ประกาศ / ประชาสัมพันธ์": "Announcements", "ค้นหากิจกรรมที่สนใจ": "Search events", "ค้นหากิจกรรม": "Find events",
  "วันที่ใกล้สุด": "Soonest first", "วันที่ไกลสุด": "Latest first",
  "ไม่พบกิจกรรมที่ตรงกับการค้นหา": "No events match your search", "ลองเปลี่ยนคำค้นหา หรือล้างตัวกรอง": "Try another search or clear the filters",
  "ล้างตัวกรอง": "Clear filters", "ดูรายละเอียด": "View details",

  // รายละเอียดกิจกรรม
  "ไม่พบกิจกรรมนี้": "Event not found", "กิจกรรมอาจถูกลบ หรือยังไม่เปิดให้เห็น": "The event may have been deleted",
  "เข้าร่วมกิจกรรม": "Join event", "ลงทะเบียนแล้ว": "Registered", "ยกเลิกการเข้าร่วม": "Cancel registration",
  "กรอกแบบฟอร์มสมัคร": "Fill in the registration form", "บันทึกแล้ว": "Saved", "ลงปฏิทิน": "Add to calendar", "แชร์ลิงก์": "Share link",
  "เกี่ยวกับกิจกรรม": "About this event", "ผู้เข้าร่วม": "Who can join", "สิ่งที่ต้องเตรียม": "What to bring",
  "ติดต่อผู้จัดกิจกรรม": "Contact the organizer", "เจ้าภาพ:": "Host:", "ผู้ติดต่อ:": "Contact:",
  "คุณเป็นผู้จัดกิจกรรมนี้": "You are the organizer", "กิจกรรมจบแล้ว": "This event has ended", "ยังไม่มีรายละเอียด": "No details yet",
  "เครื่องมือผู้จัด": "Organizer tools", "ดาวน์โหลดรายชื่อ (Excel)": "Download list (Excel)", "เปิดรับสมัครอีกครั้ง": "Reopen registration",
  "ลบกิจกรรม": "Delete event", "ยังไม่มีผู้สมัครผ่านระบบ": "No registrations yet", "ไม่เปิดเผยชื่อ": "Name hidden",

  // บันทึกไว้ / ของฉัน
  "กิจกรรมที่คุณกดบันทึกไว้ดูทีหลัง": "Events you saved for later", "นำออกจากรายการ": "Remove",
  "ยังไม่มีกิจกรรมที่บันทึกไว้": "No saved events yet", "กดบันทึกกิจกรรมที่สนใจ แล้วกลับมาดูที่นี่ได้เลย": "Save events you like and find them here",
  "กำลังจะมา": "Upcoming", "เข้าร่วมแล้ว": "Attended", "สร้างไว้": "Created", "กิจกรรมที่ฉันสร้าง": "Events I created",
  "ยังไม่มีกิจกรรมที่กำลังจะมา": "No upcoming events", "ยังไม่มีกิจกรรมที่เข้าร่วมไปแล้ว": "No past events yet", "ยังไม่ได้สร้างกิจกรรม": "You haven't created any events",
  "ยื่นคำขอจัดกิจกรรม": "Request to hold an event",

  // คำขอจัดกิจกรรม
  "คำขอจัดกิจกรรม": "Event requests", "ต้องได้รับอนุมัติจากคณบดีก่อน จึงจะสร้างกิจกรรมได้": "You need the Dean's approval before creating an event",
  "ยื่นคำขอใหม่": "New request", "ยังไม่มีคำขอจัดกิจกรรม": "No event requests yet",
  "ยื่นคำขอถึงคณบดีของคณะ เพื่อขออนุญาตจัดกิจกรรม": "Send a request to your faculty's Dean for permission",
  "ส่งเรื่องถึงคณบดีเพื่อขออนุญาตและขออนุมัติจัดงาน": "Ask the Dean for permission and approval",
  "แก้ไขคำขอแล้วส่งใหม่": "Edit and resubmit", "ส่งถึงคณบดี": "Send to the Dean of",
  "รายละเอียดและวัตถุประสงค์": "Details and purpose", "จัดกิจกรรมอะไร เพื่ออะไร": "What is the event and why",
  "วันที่": "Date", "จำนวนคน (โดยประมาณ)": "Expected attendees", "เวลาเริ่ม": "Start time", "เวลาสิ้นสุด": "End time",
  "สถานที่": "Venue", "ผู้จัดงาน (ชมรม / หน่วยงาน)": "Organizer (club / unit)", "ผู้รับผิดชอบค่าใช้จ่าย": "Paid by",
  "งบประมาณ (บาท)": "Budget (THB)", "ไม่มีให้เว้นว่าง": "Leave blank if none", "ส่งคำขอ": "Send request", "ส่งใหม่": "Resubmit",
  "วันเวลา": "Date & time", "ผู้จัดงาน": "Organizer", "จำนวนคน": "Attendees",
  "กำลังส่ง": "Sent", "ดำเนินการ": "In progress", "กำลังดำเนินการ": "In progress", "ผลการพิจารณา": "Decision",
  "อนุมัติ": "Approved", "ไม่อนุมัติ": "Rejected", "ดำเนินการสำเร็จ · อนุมัติ": "Completed · Approved", "ดำเนินการไม่สำเร็จ": "Not approved",
  "ส่งคำขอแล้ว รอคณะรับเรื่อง": "Request sent, waiting for the faculty", "คณะรับเรื่องแล้ว กำลังพิจารณา": "The faculty is reviewing your request",
  "แก้ไขและส่งใหม่": "Edit and resubmit", "ดูกิจกรรมที่โพสต์แล้ว": "View posted event", "ไปต่อหน้าสร้างกิจกรรม": "Continue to create event",

  // สร้างกิจกรรม
  "ต้องได้รับอนุมัติจากคณบดีก่อน": "Dean's approval needed first",
  "ยื่นคำขอจัดกิจกรรม เมื่อได้รับอนุมัติแล้วจึงกลับมาสร้างกิจกรรมได้": "Send a request. Once approved, come back to create the event.",
  "ไปหน้าคำขอจัดกิจกรรม": "Go to event requests", "หมวดหมู่": "Category", "ชื่อกิจกรรม": "Event name",
  "ข้อความบนโปสเตอร์": "Poster text", "คำโปรย": "Tagline", "รายละเอียด": "Details",
  "ลิงก์แบบฟอร์มสมัคร (ถ้ามี)": "Registration form link (optional)", "แนบลิงก์ Google Form หรือแบบฟอร์มอื่น เพื่อเก็บข้อมูลผู้สมัคร": "Attach a Google Form or other form link to collect applicant info",
  "จำนวนที่รับ": "Capacity", "เริ่ม": "Start", "สิ้นสุด": "End", "เจ้าภาพที่จัด": "Host", "ชื่อผู้ติดต่อ": "Contact name",
  "เบอร์โทร": "Phone", "อีเมล / Line": "Email / Line", "แบบฟอร์มสมัคร": "Registration form", "เจ้าภาพ / ผู้ติดต่อ": "Host / contact",
  "ใครลงทะเบียนได้": "Who can register", "ทุกคณะลงทะเบียนได้": "All faculties can register", "เฉพาะคณะที่เลือก": "Selected faculties only",
  "เลือกได้หลายคณะ นักศึกษาคณะอื่นจะเห็นกิจกรรม แต่กดลงทะเบียนไม่ได้": "You can pick several. Students from other faculties can see the event but can't register.",
  "ข้อมูลกิจกรรม": "Event info", 
  "ไม่มี (สมัครผ่านปุ่มเข้าร่วมในเว็บ)": "None (join with the button on the site)",

  // แจ้งเตือน
  "กิจกรรมเริ่มวันนี้": "Event starts today", "ยินดีต้อนรับสู่ SPU Event": "Welcome to SPU Event",
  "ค้นหากิจกรรมที่สนใจ แล้วกดเข้าร่วมได้เลย": "Find an event you like and join",
  "ได้รับอนุมัติแล้ว ไปต่อหน้าสร้างกิจกรรมได้เลย": "Approved. You can create the event now", "ไม่อนุมัติ กรุณาแก้ไขแล้วส่งใหม่": "Rejected. Please edit and resubmit",
  "ไปที่หน้าจัดการระบบเพื่ออนุมัติหรือไม่อนุมัติ": "Open the admin page to approve or reject",

  // โปรไฟล์
  "เปลี่ยนรูปโปรไฟล์": "Change photo", "ลบรูป": "Remove photo", "เข้าร่วม": "Joined", "จัดการระบบ (แอดมิน)": "Admin panel", "ลบบัญชี": "Delete account",
  "แก้ไขโปรไฟล์": "Edit profile", "เปลี่ยนรหัสผ่าน": "Change password", "รหัสผ่านเดิม": "Current password",
  "รหัสผ่านใหม่ (อย่างน้อย 8 ตัว)": "New password (at least 8 characters)", "ยืนยันรหัสผ่านใหม่": "Confirm new password",
  "ความเป็นส่วนตัว": "Privacy", "แสดงชื่อและคณะต่อผู้จัดกิจกรรม": "Show my name and faculty to organizers", "รับการแจ้งเตือนกิจกรรม": "Get event notifications",
  "ติดต่อผู้ดูแลระบบ": "Contact the administrator", "มีปัญหาการใช้งาน หรือสอบถามเรื่องคำขอจัดกิจกรรม ติดต่อได้ที่": "For help or questions about event requests, contact",
  "จันทร์-ศุกร์ 08:30-16:30 น.": "Mon-Fri 08:30-16:30", "อาคาร 1 ชั้น 2 ห้องกิจการนักศึกษา": "Building 1, 2nd floor, Student Affairs office", "02-000-0000 (ตัวอย่าง)": "02-000-0000 (sample)",

  // ประกาศ
  "ไม่พบประกาศนี้": "Announcement not found", "ประกาศอาจถูกลบไปแล้ว": "It may have been deleted", "ลบประกาศนี้": "Delete announcement",
  "ประกาศ": "Notice", "ประชาสัมพันธ์": "PR", "ข่าวระบบ": "System news", "ดูกิจกรรม": "View event",
  "เปิดลิงก์ที่เกี่ยวข้อง": "Open related link", "ไปที่หน้าที่เกี่ยวข้อง": "Go to related page",

  // แอดมิน
  "จัดการระบบ": "Admin panel", "สำหรับผู้ดูแลระบบ: พิจารณาคำขอแทนคณบดี จัดการกิจกรรม และประกาศหน้าหลัก": "For administrators: review requests on behalf of Deans, manage events and announcements",
  "คำขอรอพิจารณา": "Requests waiting", "กิจกรรมที่กำลังจะมา": "Upcoming events", "นักศึกษาในระบบ": "Students", "ที่นั่งที่ถูกจองแล้ว": "Seats booked",
  "รับเรื่อง (ดำเนินการ)": "Accept (in progress)", "พิจารณาแล้ว": "Reviewed", "ยังไม่มีคำขอ": "No requests", "ยังไม่มีกิจกรรม": "No events", "ยังไม่มีประกาศ": "No announcements",
  "เพิ่มประกาศ / ประชาสัมพันธ์": "Add announcement", "เพิ่มประกาศ": "Add announcement", "ประเภท": "Type", "สีโปสเตอร์": "Poster color",
  "ชมพู": "Pink", "ส้ม": "Orange", "ฟ้า": "Blue", "เขียว": "Green", "หัวข้อ": "Title",
  "ข้อความสั้น (แสดงบนการ์ด)": "Short text (shown on the card)", "รายละเอียด (แสดงในหน้าดูรายละเอียด)": "Details (shown on the details page)",
  "ไฟล์โปสเตอร์ (ถ้ามี)": "Poster image (optional)", 
  "ตัวอย่างโปสเตอร์": "Poster preview", "ลิงก์ที่เกี่ยวข้อง (ถ้ามี)": "Related link (optional)", "ประกาศที่แสดงอยู่": "Current announcements",

  // ตัวอย่างในช่องกรอก (placeholder)
  "เช่น 081-234-5678": "e.g. 081-234-5678", "เช่น 100": "e.g. 100", "เช่น PHOTO": "e.g. PHOTO",
  "เช่น https://forms.gle/...": "e.g. https://forms.gle/...", "เช่น event.html?id=e2 หรือ https://...": "e.g. event.html?id=e2 or https://...",
  "เช่น เก็บมุมสวยในรั้วมหาวิทยาลัย": "e.g. Capture the beauty of campus", "เช่น กล้องหรือมือถือ": "e.g. Camera or phone",
  "เช่น งบชมรม / กองกิจการนักศึกษา": "e.g. Club budget / Student Affairs", "เช่น ชมรมถ่ายภาพ SPU": "e.g. SPU Photography Club",
  "เช่น นักศึกษาทุกคณะ": "e.g. Students from all faculties", "เช่น ประกวดถ่ายภาพ SPU Campus": "e.g. SPU Campus Photo Contest",
  "เช่น ลานกิจกรรมกลาง": "e.g. Central activity yard",

  // ข้อความ error / toast
  "กรุณากรอกอีเมลและรหัสผ่าน": "Please enter your email and password", "อีเมลหรือรหัสผ่านไม่ถูกต้อง": "Incorrect email or password",
  "กรุณากรอกชื่อและนามสกุล": "Please enter your first and last name", "รหัสนักศึกษาต้องเป็นตัวเลข 8 หลัก": "Student ID must be 8 digits",
  "กรุณาเลือกคณะ": "Please select a faculty", "กรุณาใช้อีเมลมหาวิทยาลัย (@spumail.net)": "Please use your university email (@spumail.net)",
  "อีเมลนี้มีบัญชีอยู่แล้ว ลองเข้าสู่ระบบแทน": "This email already has an account. Try logging in.",
  "รหัสนักศึกษานี้มีบัญชีอยู่แล้ว ลองเข้าสู่ระบบแทน": "This student ID already has an account. Try logging in.",
  "รหัสนักศึกษานี้มีคนใช้แล้ว": "This student ID is already in use",
  "เฉพาะนักศึกษาลงทะเบียนได้": "Only students can register",
  "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร": "Password must be at least 8 characters", "ยืนยันรหัสผ่านไม่ตรงกัน": "Passwords don't match",
  "กรุณายอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว": "Please accept the terms and privacy policy", "ไม่พบบัญชีที่ใช้อีเมลนี้": "No account uses this email",
  "ส่งลิงก์ตั้งรหัสผ่านใหม่ไปที่อีเมลแล้ว (ตัวอย่าง)": "Reset link sent to your email (demo)",
  "รหัสผ่านเดิมไม่ถูกต้อง": "Current password is incorrect", "รหัสผ่านใหม่ต้องมีอย่างน้อย 8 ตัวอักษร": "New password must be at least 8 characters",
  "ยืนยันรหัสผ่านใหม่ไม่ตรงกัน": "New passwords don't match", "เปลี่ยนรหัสผ่านแล้ว": "Password changed",
  "บันทึกโปรไฟล์แล้ว": "Profile saved", "บันทึกการตั้งค่าแล้ว": "Settings saved", "เปลี่ยนรูปโปรไฟล์แล้ว": "Photo updated", "ลบรูปโปรไฟล์แล้ว": "Photo removed",
  "พื้นที่เก็บข้อมูลเต็ม ลองใช้รูปอื่น": "Storage is full. Try another image",
  "พื้นที่เก็บข้อมูลเต็ม ลองใช้รูปที่เล็กลง หรือลบประกาศเก่าก่อน": "Storage is full. Use a smaller image or delete old announcements",
  "ออกจากระบบแล้ว แล้วพบกันใหม่": "Logged out. See you soon", "ลบบัญชีนี้ไม่ได้ เพราะเป็นผู้ดูแลระบบคนสุดท้าย": "Can't delete the last administrator",
  "เข้าร่วมกิจกรรมแล้ว เจอกันที่งานนะ": "You're in! See you there", "ยกเลิกการเข้าร่วมแล้ว": "Registration cancelled",
  "กิจกรรมนี้ปิดรับสมัครแล้ว": "Registration for this event is closed", "บันทึกกิจกรรมแล้ว": "Event saved", "นำออกจากรายการแล้ว": "Removed from saved",
  "ดาวน์โหลดไฟล์ปฏิทินแล้ว": "Calendar file downloaded", "ดาวน์โหลดรายชื่อแล้ว": "List downloaded", "คัดลอกลิงก์แล้ว ส่งให้เพื่อนได้เลย": "Link copied. Share it with friends",
  "คัดลอกลิงก์นี้": "Copy this link", "เปิดรับสมัครแล้ว": "Registration opened", "ปิดรับสมัครแล้ว": "Registration closed",
  "ลบกิจกรรมแล้ว": "Event deleted", "ลบประกาศแล้ว": "Announcement deleted", "เพิ่มประกาศแล้ว ไปดูได้ที่หน้ากิจกรรม": "Announcement added. See it on the Events page",
  "ส่งคำขอถึงคณบดีแล้ว ติดตามสถานะได้ที่หน้านี้": "Request sent to the Dean. Track its status here",
  "กรุณากรอกชื่อกิจกรรม": "Please enter the event name", "กรุณากรอกรายละเอียดและวัตถุประสงค์": "Please enter the details and purpose",
  "กรุณาเลือกวันที่": "Please choose a date", "วันที่ต้องไม่ย้อนหลัง": "The date can't be in the past",
  "เวลาสิ้นสุดต้องอยู่หลังเวลาเริ่ม": "End time must be after start time", "เวลาสิ้นสุดของวันนี้ผ่านไปแล้ว กรุณาเลือกเวลาใหม่": "Today's end time has passed. Please choose another time",
  "กรุณากรอกสถานที่": "Please enter the venue", "กรุณากรอกผู้จัดงาน": "Please enter the organizer", "กรุณากรอกผู้รับผิดชอบค่าใช้จ่าย": "Please enter who pays",
  "จำนวนคนต้องมีอย่างน้อย 1 คน": "Attendees must be at least 1", "งบประมาณต้องไม่ติดลบ": "Budget can't be negative",
  "กรุณากรอกชื่อผู้ติดต่อ": "Please enter a contact name", "กรุณากรอกเบอร์โทร หรืออีเมล / Line อย่างน้อย 1 ช่อง": "Please enter a phone number or email / Line",
  "ลิงก์แบบฟอร์มต้องขึ้นต้นด้วย http:// หรือ https://": "The form link must start with http:// or https://",
  "กรุณาเลือกอย่างน้อย 1 คณะ": "Please select at least 1 faculty",
  "กรุณากรอกหัวข้อและข้อความสั้น": "Please enter a title and short text",
  "ลิงก์ต้องขึ้นต้นด้วย http:// หรือ https:// หรือเป็นหน้าในเว็บ เช่น event.html?id=e2": "Links must start with http:// or https://, or be a page on this site such as event.html?id=e2",

  // กล่องยืนยัน
  "คุณต้องการออกจากระบบใช่ไหม?": "Log out now?", "ยกเลิกการเข้าร่วมใช่ไหม? ที่นั่งของคุณจะถูกคืนให้คนอื่น": "Cancel your registration? Your seat will be released.",
  "ลบกิจกรรมนี้ใช่ไหม? ผู้ที่สมัครไว้จะถูกนำออกทั้งหมด": "Delete this event? All registrations will be removed.",
  "ลบบัญชีใช่ไหม? ข้อมูลทั้งหมดจะถูกลบและกู้คืนไม่ได้": "Delete your account? All your data will be removed permanently.",
  "ลบประกาศนี้ใช่ไหม?": "Delete this announcement?", "เหตุผลที่ไม่อนุมัติ (ผู้ยื่นจะเห็นข้อความนี้)": "Reason for rejection (the applicant will see this)"
};

// ข้อความที่มีตัวเลข / ชื่อปนอยู่ (แปลด้วยรูปแบบ)
const EN_PATTERNS = [
  [/^พบ (\d+) กิจกรรม$/, m => m[1] + " events found"],
  [/^เหลือ (\d+) ที่$/, m => m[1] + " seats left"],
  [/^สวัสดี (.*)$/, m => "Hi, " + m[1]],
  [/^อีก (\d+) วัน$/, m => "In " + m[1] + " days"],
  [/^อีก (\d+) วันถึงกิจกรรม$/, m => m[1] + " days until the event"],
  [/^เข้าร่วมแล้ว (\d+)\/(\d+)$/, m => "Joined " + m[1] + "/" + m[2]],
  [/^(\d+) กิจกรรม$/, m => m[1] + " events"],
  [/^(\d+) คน$/, m => m[1] + " people"],
  [/^ปี (\d)$/, m => "Year " + m[1]],
  [/^ขั้นตอน (\d)\/(\d) · (.+)$/, m => "Step " + m[1] + "/" + m[2] + " · " + translate(m[3])],
  [/^สมัครสมาชิกสำเร็จ ยินดีต้อนรับ (.+)$/, m => "Signed up! Welcome, " + m[1]],
  [/^ยินดีต้อนรับ (.+)$/, m => "Welcome, " + m[1]],
  [/^SPU \/ (.+)$/, m => "SPU / " + translate(m[1])],
  [/^(.+) · SPU Event$/, m => translate(m[1]) + " · SPU Event"],
  [/^เฉพาะ (.+)$/, m => "Only " + m[1].split(", ").map(translate).join(", ")],
  [/^(\d+) · (.+)$/, m => m[1] + " · " + translate(m[2])], // "66123456 · คณะ..." ในหน้าโปรไฟล์
  [/^ผู้ดูแลระบบ · (.+)$/, m => "Administrator · " + translate(m[1])],
  [/^มีกิจกรรมรออนุมัติโพสต์ (\d+) รายการ$/, m => m[1] + " events waiting for approval"],
  [/^กิจกรรม "(.+)" รอแอดมินอนุมัติ$/, m => "\"" + m[1] + "\" is awaiting admin approval"],
  [/^แอดมินไม่อนุมัติ "(.+)"$/, m => "The admin rejected \"" + m[1] + "\""],
  [/^แอดมินไม่อนุมัติกิจกรรม: (.*)$/, m => "The admin rejected this event: " + m[1]],
  [/^แอดมินไม่อนุมัติ: (.+)$/, m => "Rejected by the admin: " + m[1]],
  [/^โพสต์โดย (.+)$/, m => "Posted by " + m[1]],
  [/^บันทึกข้อมูลของ (.+) แล้ว$/, m => "Saved " + m[1] + "'s details"],
  [/^(.+@.+) · นักศึกษา$/, m => m[1] + " · Student"],
  [/^(.+@.+) · (อาจารย์|เจ้าหน้าที่)$/, m => m[1] + " · " + translate(m[2])],
  [/^พิจารณาโดย (.+)$/, m => "Reviewed by " + m[1]],
  [/^แอดมินไม่อนุมัติโพสต์: (.+) · แก้ไขข้อมูลแล้วส่งใหม่ได้เลย$/, m => "Admin rejected the post: " + m[1] + " · Edit and resubmit"],
  [/^คำขอที่ส่งถึงคณบดี(.+)$/, m => "Requests sent to the Dean of " + translate(m[1])],
  [/^(อาจารย์|เจ้าหน้าที่) · (.+) · เห็นและอนุมัติได้เฉพาะคำขอที่ส่งถึงคณบดีคณะนี้$/, m => translate(m[1]) + " · " + translate(m[2]) + " · You can only see and approve requests sent to this faculty's Dean"],
  [/^(อาจารย์|เจ้าหน้าที่) · (.+)$/, m => translate(m[1]) + " · " + translate(m[2])],
  [/^ไปที่หน้าจัดการระบบ แท็บ "รออนุมัติโพสต์"$/, () => "Open the admin panel, \"Pending posts\" tab"],
  [/^มีคำขอรอพิจารณา (\d+) รายการ$/, m => m[1] + " requests waiting for review"],
  [/^ยืนยันเข้าร่วม "(.+)" ใช่ไหม\?$/, m => "Join \"" + m[1] + "\"?"],
  [/^ลบกิจกรรม "(.+)" ใช่ไหม\?$/, m => "Delete \"" + m[1] + "\"?"],
  [/^ลบประกาศ "(.+)" ใช่ไหม\?$/, m => "Delete \"" + m[1] + "\"?"],
  [/^เปลี่ยนสถานะเป็น "(.+)" แล้ว$/, m => "Status changed to \"" + translate(m[1]) + "\""],
  [/^ส่งถึงคณบดี(.+) · ยื่นเมื่อ (.+)$/, m => "To the Dean of " + translate(m[1]) + " · Submitted " + m[2]],
  [/^ผู้ยื่น: (.+) · ถึงคณบดี(.+) · (.+)$/, m => "From " + m[1] + " · To the Dean of " + translate(m[2]) + " · " + m[3]],
  [/^เหตุผลที่ไม่อนุมัติ: (.+)$/, m => "Reason for rejection: " + m[1]],
  [/^เหตุผล: (.+)$/, m => "Reason: " + m[1]],
  [/^คำขอ "(.+)" · (.+)$/, m => "Request \"" + m[1] + "\" · " + translate(m[2])],
  [/^คำขอ "(.+)" ได้รับอนุมัติแล้ว.*$/, m => "Request \"" + m[1] + "\" was approved. Add a few more details, then send it to the admin to approve the post."],
  [/^เข้าร่วมทั้งหมด (\d+) คน \(สมัครผ่านบัญชีในระบบ (\d+) คน ที่เหลือเป็นข้อมูลตัวอย่าง\)$/, m => m[1] + " joined (" + m[2] + " through accounts on this site, the rest are sample data)"],
  [/^เข้าร่วมทั้งหมด (\d+) คน$/, m => m[1] + " joined"]
];

// ส่วนย่อยที่แทนได้ทุกที่ในข้อความ (เช่น วันที่ภาษาไทย)
const TH_MONTHS_EN = { "ม.ค.": "Jan", "ก.พ.": "Feb", "มี.ค.": "Mar", "เม.ย.": "Apr", "พ.ค.": "May", "มิ.ย.": "Jun", "ก.ค.": "Jul", "ส.ค.": "Aug", "ก.ย.": "Sep", "ต.ค.": "Oct", "พ.ย.": "Nov", "ธ.ค.": "Dec" };

function translatePieces(text) {
  return text
    // "25 ต.ค. 2569" → "25 Oct 2026"
    .replace(/(\d{1,2}) (ม\.ค\.|ก\.พ\.|มี\.ค\.|เม\.ย\.|พ\.ค\.|มิ\.ย\.|ก\.ค\.|ส\.ค\.|ก\.ย\.|ต\.ค\.|พ\.ย\.|ธ\.ค\.) (\d{4})/g,
      (all, d, mon, y) => d + " " + TH_MONTHS_EN[mon] + " " + (Number(y) - 543))
    .replace(/ · งบ ([\d,]+) บาท/g, " · Budget $1 THB")
    .replace(/ · เข้าร่วม (\d+)\/(\d+)/g, " · Joined $1/$2")
    .replace(/(\d{1,2}:\d{2}) น\./g, "$1");
}

// แปลข้อความ 1 ข้อความ (ถ้าไม่มีในตาราง คืนข้อความเดิม)
function translate(text) {
  if (LANG !== "en") return text;
  const key = text.trim();
  if (key === "" || !/[฀-๿]/.test(key)) return text;
  if (EN[key]) return text.replace(key, EN[key]);
  for (const [pattern, make] of EN_PATTERNS) {
    const m = key.match(pattern);
    if (m) return translatePieces(text.replace(key, make(m))); // แปลวันที่ที่อยู่ข้างในต่อด้วย
  }
  return translatePieces(text);
}

// แปลทุกอย่างใน element (ข้อความ + placeholder / aria-label / alt / title)
function translateElement(root) {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(translateTextNode);

  [root, ...root.querySelectorAll("[placeholder], [aria-label], [alt], [title]")].forEach(function (el) {
    ["placeholder", "aria-label", "alt", "title"].forEach(function (attr) {
      if (el.hasAttribute && el.hasAttribute(attr)) el.setAttribute(attr, translate(el.getAttribute(attr)));
    });
  });
}

function translateTextNode(node) {
  const parent = node.parentNode;
  if (!parent || ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.nodeName)) return;
  // <option> ที่ไม่มี value ใช้ข้อความเป็นค่า → เก็บค่าไทยเดิมไว้ก่อน ข้อมูลที่บันทึกจะได้ไม่เปลี่ยน
  if (parent.nodeName === "OPTION" && !parent.hasAttribute("value")) {
    parent.setAttribute("value", parent.textContent);
  }
  const translated = translate(node.nodeValue);
  if (translated !== node.nodeValue) node.nodeValue = translated;
}

// ปุ่มเปลี่ยนภาษา: อยู่ในแถบด้านบน (ถ้าไม่มีแถบ เช่นหน้าเข้าสู่ระบบ ลอยมุมขวาบน)
function addLanguageButton() {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "lang-btn";
  button.textContent = LANG === "en" ? "ไทย" : "EN";
  button.setAttribute("aria-label", LANG === "en" ? "เปลี่ยนเป็นภาษาไทย" : "Switch to English");
  button.addEventListener("click", function () {
    localStorage.setItem("spu_lang", LANG === "en" ? "th" : "en");
    location.reload(); // โหลดหน้าใหม่ด้วยภาษาที่เลือก
  });

  const bar = document.querySelector(".top-actions");
  if (bar) {
    bar.prepend(button);
  } else {
    button.classList.add("float");
    document.body.appendChild(button);
  }
}

addLanguageButton();

if (LANG === "en") {
  document.documentElement.lang = "en";
  document.title = translate(document.title);
  translateElement(document.body);

  // ข้อความที่ JavaScript ใส่เพิ่มทีหลัง ก็แปลด้วย
  new MutationObserver(function (changes) {
    changes.forEach(change => change.addedNodes.forEach(translateElement));
  }).observe(document.body, { childList: true, subtree: true });

  // กล่อง confirm / prompt ของเบราว์เซอร์
  const originalAlert = window.alert;
  const originalConfirm = window.confirm;
  const originalPrompt = window.prompt;
  window.alert = message => originalAlert(translate(message));
  window.confirm = message => originalConfirm(translate(message));
  window.prompt = (message, value) => originalPrompt(translate(message), value);
}
