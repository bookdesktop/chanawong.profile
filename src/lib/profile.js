// ข้อมูลโปรไฟล์ทั้งหมด (อ้างอิงจากเรซูเม่ S__14237742.jpg)
export const profile = {
  firstName: "ชนะวงศ์",
  lastName: "ศิริมงคล",
  initials: "CS",
  position: "IT Support & Network System",
  age: "25 ปี",
  birthday: "28 พฤศจิกายน 2543",
  address: "104/5 ม.6 ต.นาดี อ.เมือง จ.สมุทรสาคร 74000",
  location: "สมุทรสาคร, ประเทศไทย",
  email: "chanawongsiri2000@gmail.com",
  phone: "081-709-4695",
  phoneIntl: "+66817094695",
  lineId: "i_chanawong_na",
  photo: "/img/profile.jpg",
};

export const roles = ["IT Support", "Network System", "Hardware Support", "User Support"];

export const skills = [
  { icon: "Monitor", title: "Windows OS", desc: "ติดตั้ง / แก้ไขปัญหา Windows OS ให้พร้อมใช้งาน" },
  { icon: "FileText", title: "MS Office", desc: "ติดตั้ง ตั้งค่า และช่วยเหลือผู้ใช้งานโปรแกรม MS Office" },
  { icon: "HardDrive", title: "Hardware & Peripheral Support", desc: "ดูแลคอมพิวเตอร์ อุปกรณ์เครือข่าย และอุปกรณ์ต่อพ่วง" },
  { icon: "Network", title: "Network เบื้องต้น (LAN / Wi-Fi)", desc: "ตั้งค่าและดูแลระบบเครือข่าย LAN / Wi-Fi ภายในองค์กร" },
  { icon: "Wrench", title: "Troubleshooting ระบบคอมพิวเตอร์", desc: "วิเคราะห์และแก้ไขปัญหาระบบคอมพิวเตอร์อย่างเป็นขั้นตอน" },
];

export const skillGroups = [
  { title: "IT Support", chips: ["Windows OS", "MS Office", "Troubleshooting", "User Support", "Hardware", "Peripheral"] },
  { title: "Network & Server", chips: ["LAN / Wi-Fi", "Switch Layer 2", "Switch Layer 3", "Zabbix", "NAS", "Backup & Recovery"] },
  { title: "ระบบและงานอื่น ๆ", chips: ["CCTV", "ERP User Account", "Folder Share", "Stock IT", "PR (Purchase Request)", "Maintenance Plan"] },
];

export const experience = [
  { period: "2568 – 2569", company: "บริษัท H.V. FILA CO.,LTD.", tag: "ล่าสุด" },
  { period: "2567 – 2568", company: "บริษัท C.E.M. TECHNOLOGY (THAILAND)", tag: "ก่อนหน้า" },
];

export const duties = [
  "วิเคราะห์และจัดหาสเปคอุปกรณ์ไอทีให้เหมาะสมกับลักษณะงานของผู้ใช้งาน เพื่อให้รองรับการทำงานได้อย่างมีประสิทธิภาพ",
  "ประสานงานและติดต่อสื่อสารกับผู้ให้บริการ/ซัพพลายเออร์ (Supplier/Vendor) เพื่อแก้ไขปัญหาเกี่ยวกับอุปกรณ์และระบบไอที",
  "วางแผนและจัดทำ Maintenance Plan สำหรับอุปกรณ์ฮาร์ดแวร์ เช่น คอมพิวเตอร์ อุปกรณ์เครือข่าย และอุปกรณ์ต่อพ่วง",
  "แก้ไขปัญหาซอฟต์แวร์และโปรแกรมพื้นฐานที่ใช้งานภายในองค์กร เพื่อให้ระบบสามารถทำงานได้อย่างราบรื่น",
  "ดูแลและตั้งค่า Switch ระดับ Layer 2 และ Layer 3 (Basic Configuration) เพื่อรองรับการทำงานของระบบเครือข่าย",
  "ให้การสนับสนุนและแก้ไขปัญหาด้านฮาร์ดแวร์แก่ผู้ใช้งาน (User Support) ทั้งในสำนักงานและหน้างาน",
  "ดูแลและตรวจสอบสถานะระบบผ่าน Zabbix Dashboard เพื่อเฝ้าระวังประสิทธิภาพและความผิดปกติของระบบ",
  "ดำเนินการ Backup ข้อมูลจาก Server ลงระบบ NAS เพื่อป้องกันการสูญหายของข้อมูลและรองรับการกู้คืนระบบ (Data Recovery)",
  "ดูแลและดำเนินการ Backup ข้อมูลบนระบบ NAS เพื่อความปลอดภัยและความต่อเนื่องของข้อมูลภายในองค์กร",
  "จัดทำ Stock อุปกรณ์ไอที ตรวจสอบคงคลัง และดำเนินการเปิด PR (Purchase Request) สำหรับอุปกรณ์ด้าน IT",
  "ดูแลและบำรุงรักษาระบบ CCTV ภายในองค์กร รวมถึงตรวจสอบการทำงานของกล้องและอุปกรณ์บันทึกภาพให้พร้อมใช้งาน",
  "สร้างและจัดการ User Account สำหรับระบบ ERP และ NAS รวมถึงกำหนดสิทธิ์การเข้าถึงและดูแล Folder Share ให้เหมาะสมกับการใช้งานของผู้ใช้",
];

export const education = [
  { period: "2562 – 2566", level: "ปริญญาตรี", school: "มหาวิทยาลัยราชภัฏนครปฐม", gpa: "3.27" },
  { period: "2559 – 2562", level: "ระดับมัธยมศึกษาตอนปลาย", school: "โรงเรียนครุณาราชบุรี", gpa: "3.25" },
  { period: "2556 – 2559", level: "ระดับมัธยมศึกษาตอนต้น", school: "โรงเรียนวัดเขาวัง", gpa: "3.50" },
];

export const trainings = [
  { icon: "ShieldCheck", title: "คณะกรรมการความปลอดภัย ฯ" },
  { icon: "Boxes", title: "การใช้งานรถโฟล์คลิฟท์ตามหลักความปลอดภัย" },
  { icon: "Zap", title: "ความปลอดภัยในการทำงานเกี่ยวกับไฟฟ้า" },
];

export const marqueeTop = [
  "IT SUPPORT", "NETWORK SYSTEM", "WINDOWS OS", "MS OFFICE", "LAN / WI-FI",
  "SWITCH LAYER 2 / 3", "ZABBIX MONITORING", "NAS BACKUP", "CCTV", "ERP USER ACCOUNT",
];
export const marqueeBottom = [
  "TROUBLESHOOTING", "HARDWARE", "USER SUPPORT", "DATA RECOVERY", "MAINTENANCE PLAN",
];
