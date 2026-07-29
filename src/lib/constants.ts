export const CATEGORIES = [
  { slug: 'data-analyst', name: 'Data Analyst', icon: 'bar-chart-2', color: 'bg-blue-100 text-blue-800' },
  { slug: 'project-coordinator', name: 'Project Coordinator', icon: 'calendar', color: 'bg-purple-100 text-purple-800' },
  { slug: 'secretary-executive-assistant', name: 'Secretary / Executive Assistant', icon: 'file-text', color: 'bg-pink-100 text-pink-800' },
  { slug: 'data-entry-specialist', name: 'Data Entry Specialist', icon: 'database', color: 'bg-green-100 text-green-800' },
  { slug: 'data-annotation-ai-trainer', name: 'Data Annotation / AI Trainer', icon: 'tag', color: 'bg-yellow-100 text-yellow-800' },
  { slug: 'translation-localizer', name: 'Translation / Localizer', icon: 'globe', color: 'bg-indigo-100 text-indigo-800' },
  { slug: 'voice-over-voice-talent', name: 'Voice Over / Voice Talent', icon: 'mic', color: 'bg-red-100 text-red-800' },
  { slug: 'email-management', name: 'Email Management', icon: 'mail', color: 'bg-teal-100 text-teal-800' },
  { slug: 'schedule-management', name: 'Schedule Management', icon: 'clock', color: 'bg-orange-100 text-orange-800' },
  { slug: 'travel-planner', name: 'Travel Planner', icon: 'map-pin', color: 'bg-cyan-100 text-cyan-800' },
  { slug: 'social-media-management', name: 'Social Media Management', icon: 'share-2', color: 'bg-rose-100 text-rose-800' },
] as const

export const LEVELS = [
  { value: 'EASY', label: 'Easy', color: 'easy' as const, estimated: '1-2 jam' },
  { value: 'MEDIUM', label: 'Medium', color: 'medium' as const, estimated: '3-5 jam' },
  { value: 'COMPLEX', label: 'Complex', color: 'complex' as const, estimated: '1-2 hari' },
] as const

export interface ToolLink {
  name: string
  url: string
  description: string
  icon: string
  type: 'template' | 'tool' | 'guide'
}

export const RECOMMENDED_TOOLS: Record<string, ToolLink[]> = {
  'data-analyst': [
    { name: 'Google Sheets', url: 'https://sheets.google.com/create', description: 'Template spreadsheet untuk analisis data', icon: 'table', type: 'template' },
    { name: 'Google Data Studio', url: 'https://datastudio.google.com/', description: 'Dashboard visual gratis dari Google', icon: 'bar-chart', type: 'tool' },
    { name: 'Canva - Data Visualization', url: 'https://www.canva.com/graphs/', description: 'Template grafik dan infografis', icon: 'pie-chart', type: 'template' },
    { name: 'Kaggle Datasets', url: 'https://www.kaggle.com/datasets', description: 'Dataset gratis untuk latihan analisis', icon: 'database', type: 'guide' },
  ],
  'project-coordinator': [
    { name: 'Google Sheets - Project Timeline', url: 'https://sheets.google.com/create', description: 'Template Gantt chart dan timeline', icon: 'calendar', type: 'template' },
    { name: 'Trello', url: 'https://trello.com/', description: 'Kanban board gratis untuk manajemen tugas', icon: 'layout', type: 'tool' },
    { name: 'Notion - Project Hub', url: 'https://www.notion.so/templates/project-management', description: 'Template manajemen proyek lengkap', icon: 'file-text', type: 'template' },
    { name: 'Canva - Meeting Agenda', url: 'https://www.canva.com/templates/?query=meeting+agenda', description: 'Template agenda rapat profesional', icon: 'clipboard', type: 'template' },
  ],
  'secretary-executive-assistant': [
    { name: 'Google Calendar', url: 'https://calendar.google.com/', description: 'Kalender untuk scheduling', icon: 'calendar', type: 'tool' },
    { name: 'Canva - Letter Template', url: 'https://www.canva.com/templates/?query=business+letter', description: 'Template surat bisnis resmi', icon: 'mail', type: 'template' },
    { name: 'Google Docs - Meeting Minutes', url: 'https://docs.google.com/create', description: 'Template MoM profesional', icon: 'file-text', type: 'template' },
    { name: 'Calendly', url: 'https://calendly.com/', description: 'Scheduling tool gratis', icon: 'clock', type: 'tool' },
  ],
  'data-entry-specialist': [
    { name: 'Google Sheets', url: 'https://sheets.google.com/create', description: 'Spreadsheet untuk data entry', icon: 'table', type: 'template' },
    { name: 'Airtable', url: 'https://airtable.com/', description: 'Database no-code untuk data management', icon: 'database', type: 'tool' },
    { name: 'Canva - Data Dashboard', url: 'https://www.canva.com/templates/?query=dashboard', description: 'Template dashboard visual', icon: 'monitor', type: 'template' },
    { name: 'OpenRefine', url: 'https://openrefine.org/', description: 'Tool gratis untuk data cleaning', icon: 'wand', type: 'tool' },
  ],
  'data-annotation-ai-trainer': [
    { name: 'Label Studio', url: 'https://labelstud.io/', description: 'Platform labeling data open-source', icon: 'tag', type: 'tool' },
    { name: 'CVAT', url: 'https://cvat.ai/', description: 'Computer vision annotation tool', icon: 'image', type: 'tool' },
    { name: 'Prodigy', url: 'https://prodi.gy/', description: 'Annotation tool untuk NLP', icon: 'message-square', type: 'tool' },
    { name: 'Google Sheets - Label Tracker', url: 'https://sheets.google.com/create', description: 'Tracking label dan progress', icon: 'check-square', type: 'template' },
  ],
  'translation-localizer': [
    { name: 'DeepL', url: 'https://www.deepl.com/', description: 'Translator AI terbaik untuk akurasi', icon: 'globe', type: 'tool' },
    { name: 'Google Translate', url: 'https://translate.google.com/', description: 'Translator gratis dengan banyak bahasa', icon: 'languages', type: 'tool' },
    { name: 'Canva - Bilingual Document', url: 'https://www.canva.com/templates/?query=bilingual', description: 'Template dokumen dua bahasa', icon: 'file-text', type: 'template' },
    { name: 'Google Sheets - Glossary', url: 'https://sheets.google.com/create', description: 'Template glossary terjemahan', icon: 'book', type: 'template' },
  ],
  'voice-over-voice-talent': [
    { name: 'Audacity', url: 'https://www.audacityteam.org/', description: 'Audio editor gratis & open-source', icon: 'mic', type: 'tool' },
    { name: 'Voice Record Pro', url: 'https://www.voice-record-pro.com/', description: 'Aplikasi perekaman suara gratis', icon: 'circle', type: 'tool' },
    { name: 'Canva - Script Template', url: 'https://www.canva.com/templates/?query=script', description: 'Template naskah VO profesional', icon: 'file-text', type: 'template' },
    { name: 'TwistedWave', url: 'https://twistedwave.com/', description: 'Online audio editor', icon: 'headphones', type: 'tool' },
  ],
  'email-management': [
    { name: 'Gmail', url: 'https://mail.google.com/', description: 'Email manager utama', icon: 'mail', type: 'tool' },
    { name: 'Canva - Email Template', url: 'https://www.canva.com/templates/?query=email+newsletter', description: 'Template email profesional', icon: 'send', type: 'template' },
    { name: 'Google Sheets - Email Tracker', url: 'https://sheets.google.com/create', description: 'Template tracking email', icon: 'table', type: 'template' },
    { name: 'Mailchimp', url: 'https://mailchimp.com/', description: 'Email marketing platform', icon: 'mail', type: 'tool' },
  ],
  'schedule-management': [
    { name: 'Google Calendar', url: 'https://calendar.google.com/', description: 'Kalender utama untuk scheduling', icon: 'calendar', type: 'tool' },
    { name: 'World Time Buddy', url: 'https://www.worldtimebuddy.com/', description: 'Konverter zona waktu', icon: 'clock', type: 'tool' },
    { name: 'Canva - Schedule Template', url: 'https://www.canva.com/templates/?query=schedule', description: 'Template jadwal visual', icon: 'calendar-days', type: 'template' },
    { name: 'Google Sheets - Weekly Planner', url: 'https://sheets.google.com/create', description: 'Template planner mingguan', icon: 'table', type: 'template' },
  ],
  'travel-planner': [
    { name: 'Google Maps', url: 'https://maps.google.com/', description: 'Peta dan navigasi', icon: 'map', type: 'tool' },
    { name: 'Canva - Travel Itinerary', url: 'https://www.canva.com/templates/?query=travel+itinerary', description: 'Template itinerary perjalanan', icon: 'map-pin', type: 'template' },
    { name: 'Google Sheets - Budget Tracker', url: 'https://sheets.google.com/create', description: 'Template budget perjalanan', icon: 'dollar-sign', type: 'template' },
    { name: 'TripIt', url: 'https://www.tripit.com/', description: 'Aplikasi perencanaan perjalanan', icon: 'plane', type: 'tool' },
  ],
  'social-media-management': [
    { name: 'Canva - Social Media Templates', url: 'https://www.canva.com/templates/?query=social+media', description: 'Template feed & story Instagram', icon: 'image', type: 'template' },
    { name: 'Google Sheets - Content Calendar', url: 'https://docs.google.com/spreadsheets/d/1WbEJSdGamRsUJSUvBwS1CeiJaMb4gWbwYmAHZvA_mWE/edit?usp=sharing', description: 'Content Calendar siap pakai', icon: 'calendar', type: 'template' },
    { name: 'Later', url: 'https://later.com/', description: 'Scheduler postingan Instagram', icon: 'clock', type: 'tool' },
    { name: 'Hashtag Generator', url: 'https://hashtagify.me/', description: 'Generator hashtag populer', icon: 'hash', type: 'tool' },
  ],
}

export const QUICK_HELP_LINKS = [
  { name: 'FAQ & Panduan', url: '/faq', description: 'Pertanyaan umum dan panduan penggunaan', icon: 'help-circle' },
  { name: 'Hubungi Admin', url: 'https://wa.me/6281234567890', description: 'Chat WhatsApp dengan admin', icon: 'message-circle', external: true },
  { name: 'Grup Discord', url: 'https://discord.gg/example', description: 'Komunitas dan diskusi', icon: 'users', external: true },
  { name: 'Video Tutorial', url: 'https://youtube.com/@example', description: 'Tutorial video langkah demi langkah', icon: 'play-circle', external: true },
]

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find(c => c.slug === slug)
}

export function getLevelByValue(value: string) {
  return LEVELS.find(l => l.value === value)
}

export function getEstimatedTime(level: string) {
  return getLevelByValue(level)?.estimated || '-'
}

export function getToolsForCategory(categorySlug: string): ToolLink[] {
  return RECOMMENDED_TOOLS[categorySlug] || []
}