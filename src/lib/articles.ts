import { Brain, Bot, Stethoscope } from 'lucide-react'

export const articles = [
  {
    id: 'ia-salud-pr',
    slug: 'ia-salud-pr',
    heroImage: '/blog/morado.jpeg',
    tag: 'Artificial Intelligence',
    tagColor: 'bg-violet-100 text-violet-700 border-violet-200',
    Icon: Brain,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    date: 'May 8, 2026',
    readTime: '5 min',
    title: 'How AI Is Transforming Healthcare in Puerto Rico',
    excerpt:
      'From faster diagnoses to algorithm-powered telemedicine platforms, artificial intelligence is redefining medical care on the Island of Enchantment.',
    accentGradient: 'from-violet-500/10 to-purple-500/5',
    content: `
<h2>A Silent Revolution in the Waiting Room</h2>
<p>Puerto Rico has spent decades dealing with a healthcare system under pressure: a shortage of specialists in remote municipalities, long waiting lists, and costs that exceed the capacity of many patients. Artificial intelligence won't solve everything overnight, but it is already changing the game in concrete and measurable ways.</p>
<p>Platforms like <strong>IslandMedPR.com</strong> and <strong>DoctorRecetas.com</strong> have shown that Puerto Ricans quickly adopt digital health services when they are well designed. The natural next step is to integrate AI into those workflows to make them smarter.</p>

<h2>AI-Assisted Diagnosis: From Doctor to Collaborative Algorithm</h2>
<p>Computer vision models already outperform human radiologists in detecting certain anomalies in X-ray and mammography images. Hospitals like the <strong>Puerto Rico Medical Center (UPR Medical Center)</strong> are exploring diagnostic support tools that allow physicians to receive an AI-generated "instant second opinion" before issuing their diagnosis.</p>
<p>This doesn't replace the doctor — it amplifies them. The physician still has the final say, but now arrives better informed for the patient encounter.</p>

<blockquote>
<p>"AI is not going to take jobs away from Puerto Rican doctors. It will free them from repetitive tasks so they can focus on what truly matters: the human connection with the patient."</p>
</blockquote>

<h2>Local Epidemic Prediction</h2>
<p>Dengue, Zika, and Chikungunya have cyclically struck Puerto Rico. Machine learning models trained on climate data from the <strong>National Weather Service</strong> and historical records from the <strong>Puerto Rico Department of Health</strong> can predict outbreaks weeks in advance, enabling more efficient preventive interventions.</p>
<p>A prototype developed at the <strong>University of Puerto Rico at Mayagüez (UPRM)</strong> achieved 82% accuracy in predicting dengue peaks using only temperature, precipitation, and public mobility data.</p>

<h2>The Challenge: The Digital Divide and Trust</h2>
<p>Not everything is optimism. Puerto Rico faces unique challenges for the mass adoption of AI in healthcare:</p>
<ul>
<li><strong>Digital divide</strong> — About 20% of households lack reliable broadband internet access, especially in rural areas of the interior.</li>
<li><strong>Historical distrust</strong> — The most vulnerable communities, marked by decades of medical inequality, are more skeptical of technological solutions.</li>
<li><strong>Language and bias</strong> — AI models trained predominantly in English may underperform with Spanish-speaking patients or with Puerto Rico's particular Caribbean Spanish.</li>
</ul>

<h2>The Path Forward</h2>
<p>The key is to develop solutions born in Puerto Rico, for Puerto Rico. Not to import generic models from Silicon Valley, but to adapt them — or create them from scratch — with local data, in the local language, for the conditions that most affect our population.</p>
<p>At <strong>Online Health PR</strong>, we believe this is possible. We are already doing it with our telemedicine platforms, and AI is the next chapter of that story.</p>
    `,
  },
  {
    id: 'chatbots-medicos',
    slug: 'chatbots-medicos',
    heroImage: '/blog/verde.jpeg',
    tag: 'Digital Telemedicine',
    tagColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Icon: Bot,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    date: 'May 3, 2026',
    readTime: '4 min',
    title: 'Medical Chatbots: The Intelligent Triage Arriving in Puerto Rico',
    excerpt:
      'Conversational AI assistants are already helping clinics and telemedicine platforms in Puerto Rico classify patients before the doctor enters the scene.',
    accentGradient: 'from-emerald-500/10 to-green-500/5',
    content: `
<h2>What Is Intelligent Triage?</h2>
<p>Before a patient speaks with a doctor, they need to answer a series of questions: What symptoms do they have? Since when? Do they have allergies? Are they taking other medications? This stage, called <strong>triage</strong>, is traditionally performed by a nurse or medical receptionist.</p>
<p>AI chatbots can do this work autonomously, at any time of day, and with a consistency that is hard to maintain in overwhelmed systems. The result: when the doctor connects, they already have a structured case summary.</p>

<h2>Experiences on the Island</h2>
<p>Telemedicine platforms operating in Puerto Rico have begun implementing automated pre-consultation workflows. A patient who comes in at 2 in the morning with flu symptoms can be automatically classified as "non-urgent" and receive basic guidance, while one with warning signs — chest pain, difficulty breathing — is immediately redirected to emergency care.</p>
<p>This is not science fiction. It is happening now.</p>

<blockquote>
<p>"A well-trained chatbot does not compete with the doctor. It gives the doctor the first ten minutes of context that they would otherwise have to build themselves during the consultation."</p>
</blockquote>

<h2>The Technology Behind AI Triage</h2>
<p>The most advanced systems combine three layers:</p>
<ul>
<li><strong>Language models (LLM)</strong> — To understand the patient's conversational language, including Puerto Rican colloquialisms.</li>
<li><strong>Medical knowledge bases</strong> — Standardized clinical protocols (UpToDate, Merck Manual) adapted to prevalent conditions in Puerto Rico.</li>
<li><strong>Escalation rules</strong> — Deterministic logic that ensures no warning symptom goes unnoticed, regardless of how "intelligent" the model is.</li>
</ul>

<h2>Regulation and Accountability</h2>
<p>The <strong>FDA</strong> already classifies certain medical software as regulated devices. In Puerto Rico, platforms that implement AI in the clinical workflow must ensure compliance with applicable regulations and have clear accountability mechanisms for when the system fails.</p>
<p>Transparency with the patient is non-negotiable: the user must always know they are interacting with an AI, not a human doctor.</p>

<h2>The Future: Chatbots That Learn From Puerto Rico</h2>
<p>The next leap is to train models directly with anonymized clinical data from the Puerto Rican population. A chatbot that "knows" that dengue is endemic in Puerto Rico, that type 2 diabetes has a 14% prevalence on the island (double the U.S. average), and that post-hurricane stress is a persistent mental health factor — that chatbot will be far more accurate than any generic model.</p>
    `,
  },
  {
    id: 'ia-administracion-medica',
    slug: 'ia-administracion-medica',
    heroImage: '/blog/azul.jpeg',
    tag: 'Health Innovation',
    tagColor: 'bg-blue-100 text-blue-700 border-blue-200',
    Icon: Stethoscope,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    date: 'April 28, 2026',
    readTime: '6 min',
    title: 'AI in Medical Administration: Less Paperwork, More Medicine',
    excerpt:
      'Artificial intelligence is automating the most tedious administrative tasks in Puerto Rico\'s healthcare system, returning valuable hours to doctors and patients.',
    accentGradient: 'from-blue-500/10 to-sky-500/5',
    content: `
<h2>The Hidden Problem: The Administrative Burden</h2>
<p>The average American physician spends nearly <strong>50% of their working time</strong> on administrative tasks: filling out forms, coding diagnoses, managing insurance authorizations, and documenting in electronic records systems. In Puerto Rico, where the majority of physicians see Medicare and Medicaid patients — with their extensive documentation requirements — this problem is even more acute.</p>
<p>Every hour a doctor spends on paperwork is an hour not spent with a patient. AI can give those hours back.</p>

<h2>Automatic Consultation Transcription</h2>
<p>Tools like <strong>Nuance DAX</strong> (acquired by Microsoft) and open source alternatives allow a medical consultation to be recorded with the patient's consent and automatically generate a structured clinical note in the language of electronic records systems (EHR).</p>
<p>In trials with primary care physicians, documentation time dropped from an average of <strong>16 minutes per consultation to under 3 minutes</strong>. Doctors describe the experience as "getting my afternoon back."</p>

<blockquote>
<p>"I left the consultation with the note already written. It felt like magic. But it's just very well done math."</p>
<cite>— Primary care physician, San Juan</cite>
</blockquote>

<h2>Diagnosis Coding with ICD-11</h2>
<p>The transition to the <strong>ICD-11</strong> coding system adds complexity to medical billing. AI models can read a clinical note and automatically suggest the correct codes, reducing billing errors and claim rejections from insurers.</p>
<p>For small clinics in Puerto Rico — which don't have a 20-person billing department — this automation can mean the difference between sustainability and closure.</p>

<h2>Prior Authorization Management</h2>
<p>Prior authorizations are the nightmare of the American healthcare system. A doctor in Puerto Rico can spend hours on the phone with an insurer trying to get approval for a medication the patient urgently needs.</p>
<p>Healthtech startups are building AI agents that manage this process semi-autonomously: they retrieve the patient's history, generate the letter of medical necessity, send it to the insurer, and follow up automatically. What used to take days now takes hours.</p>

<h2>Implementation Challenges in Puerto Rico</h2>
<p>Adoption is not instantaneous. The main obstacles in Puerto Rico include:</p>
<ul>
<li><strong>EHR fragmentation</strong> — Different clinics use different systems (Epic, Athena, NextGen) that don't always integrate well with each other.</li>
<li><strong>Implementation cost</strong> — The most advanced administrative AI tools carry a price tag that small clinics cannot afford without support.</li>
<li><strong>Training</strong> — Administrative staff need training to work alongside, not against, AI systems.</li>
</ul>

<h2>The Opportunity for Puerto Rico</h2>
<p>Puerto Rico has an unexpected competitive advantage: as a territory operating under U.S. regulation but with its own culture and healthcare system, it can serve as an <strong>innovation laboratory</strong> for Spanish-language medical AI tools that later scale to all of Latin America.</p>
<p>The Latin American digital health market will reach <strong>$8.5 billion by 2028</strong>. Companies developing bilingual and bicultural solutions from Puerto Rico will be in a privileged position to capture that market.</p>
<p>At <strong>Online Health PR</strong>, this is not a theory — it is our strategy.</p>
    `,
  },
]

export type Article = (typeof articles)[0]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
