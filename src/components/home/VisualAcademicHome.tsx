'use client';

import { motion } from 'framer-motion';
import {
    Activity,
    Award,
    BadgeCheck,
    BookOpen,
    Bot,
    Brain,
    Code2,
    Cpu,
    Database,
    ExternalLink,
    FileSearch,
    Github,
    GraduationCap,
    Mail,
    Microscope,
    Network,
    ScanLine,
    ShieldCheck,
    Stethoscope,
    Trophy,
    Workflow
} from 'lucide-react';
import { Publication } from '@/types/publication';
import type { NewsItem } from '@/components/home/News';

interface VisualAcademicHomeProps {
    publications: Publication[];
    news: NewsItem[];
}

const profileBadges = [
    { label: '四川大学', value: '计算机博士在读', icon: GraduationCap },
    { label: '研究方向', value: '法医学影像 + 医学 AI', icon: ShieldCheck },
    { label: 'GitHub', value: '934123193', href: 'https://github.com/934123193', icon: Github },
    { label: 'Email', value: 'shuailuo@stu.scu.edu.cn', href: 'mailto:shuailuo@stu.scu.edu.cn', icon: Mail },
];

const researchCards = [
    {
        title: '法医学年龄推断',
        subtitle: '骨骼影像、牙龄、胎龄与多方法评估',
        icon: ScanLine,
        tone: 'text-cyan-700 bg-cyan-50 border-cyan-100 dark:text-cyan-300 dark:bg-cyan-950/30 dark:border-cyan-800/50',
    },
    {
        title: '医学影像定量分析',
        subtitle: 'CT/MRI 指标提取、测量质控与统计建模',
        icon: Brain,
        tone: 'text-rose-700 bg-rose-50 border-rose-100 dark:text-rose-300 dark:bg-rose-950/30 dark:border-rose-800/50',
    },
    {
        title: '深度学习医学影像',
        subtitle: '语义分割、三维框架与自动化预测',
        icon: Network,
        tone: 'text-indigo-700 bg-indigo-50 border-indigo-100 dark:text-indigo-300 dark:bg-indigo-950/30 dark:border-indigo-800/50',
    },
    {
        title: '大模型科研工作流',
        subtitle: '文献结构化、脚本生成与可复现实验记录',
        icon: Workflow,
        tone: 'text-emerald-700 bg-emerald-50 border-emerald-100 dark:text-emerald-300 dark:bg-emerald-950/30 dark:border-emerald-800/50',
    },
];

const researchMap = [
    { title: 'MDCT 骨密度', detail: '耻骨、锁骨、颅骨 CT 元数据', icon: Activity },
    { title: '牙科全景片', detail: '可解释深度学习牙龄估计', icon: ScanLine },
    { title: '胎脑 MRI', detail: '多视角胎龄自动预测', icon: Brain },
    { title: '科研自动化', detail: 'LLM API、脚本、结构化记录', icon: Bot },
];

const projectTimeline = [
    {
        year: '2026',
        title: '两篇第一作者医学影像 AI 论文发表',
        detail: '牙龄自动估计发表于 IJLM；多视角胎脑 MRI 胎龄估计发表于 Pediatric Radiology',
        icon: BookOpen,
    },
    {
        year: '2025',
        title: '智慧医疗创新大赛四川赛区一等奖',
        detail: '智感护颌：人工智能赋能的颞下颌关节动态诊疗体系，排名第2',
        icon: Trophy,
    },
    {
        year: '2025',
        title: 'CCR2025 壁报交流',
        detail: '基于深度学习的产前多模态 MRI 胎儿孕周自动预测方法研究',
        icon: FileSearch,
    },
    {
        year: '2021',
        title: '国家级大创优秀项目',
        detail: '胎儿颅脑径推断胎龄的 MRI 研究，项目负责人',
        icon: GraduationCap,
    },
    {
        year: '2018',
        title: '国家级大创优秀项目',
        detail: '社氏利什曼原虫抗锑株 LHCZ 药物敏感性及分子机理研究，项目负责人',
        icon: Microscope,
    },
];

const skillItems = [
    { label: '影像数据整理', icon: Database },
    { label: 'CT/MRI 定量测量', icon: Activity },
    { label: '医学图像分割', icon: Stethoscope },
    { label: '三维深度学习', icon: Cpu },
    { label: 'Python 科研脚本', icon: Code2 },
    { label: '大模型 API', icon: Bot },
];

const honorBadges = [
    '四川大学博士一等奖学金',
    '四川大学优秀研究生',
    '四川省优秀大学毕业生',
    '四川大学优秀研究生干部',
];

function getTopPublicationTitles(publications: Publication[]) {
    if (publications.length === 0) {
        return [
            'Deep learning based gestational age estimation from multi-view fetal brain magnetic resonance imaging',
            'Automated Dental Age Estimation from Panoramic Radiographs using an Interpretable Deep Learning Model',
            'Forensic age estimation in adults by pubic bone mineral density using multidetector computed tomography',
        ];
    }

    return publications.slice(0, 3).map((publication) => publication.title);
}

export default function VisualAcademicHome({ publications, news }: VisualAcademicHomeProps) {
    const firstAuthorCount = 6;
    const coFirstCount = 2;
    const publicationTitles = getTopPublicationTitles(publications);

    const stats = [
        { label: '论文成果', value: `${firstAuthorCount + coFirstCount}`, hint: `首页展示 ${publications.length} 篇代表论文` },
        { label: '第一作者', value: `${firstAuthorCount}`, hint: '含 IJLM、Pediatric Radiology 等期刊' },
        { label: '共同第一作者', value: `${coFirstCount}`, hint: 'CT 骨龄与三维深度学习方向' },
        { label: '研究主线', value: '4', hint: '年龄推断、影像、AI、LLM' },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
        >
            <section className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-900">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-300">
                            <BadgeCheck className="h-4 w-4" />
                            四川大学 · 计算机科学与技术博士研究生
                        </div>
                        <h2 className="font-serif text-3xl font-bold leading-tight text-primary">
                            法医学影像、年龄推断与人工智能辅助医学影像分析
                        </h2>
                        <p className="mt-4 text-base leading-7 text-neutral-700 dark:text-neutral-500">
                            研究聚焦多层螺旋 CT、胎脑 MRI、牙科全景片和医学图像深度学习，将传统法医学影像评估转化为更稳定、可解释、可复核的定量流程。
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {profileBadges.map((badge) => {
                                const Icon = badge.icon;
                                const content = (
                                    <>
                                        <Icon className="h-4 w-4" />
                                        <span className="font-semibold">{badge.label}</span>
                                        <span className="text-neutral-500">{badge.value}</span>
                                        {badge.href && <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />}
                                    </>
                                );

                                if (badge.href) {
                                    return (
                                        <a
                                            key={badge.label}
                                            href={badge.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-700 transition-colors hover:border-accent hover:text-primary dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-400"
                                        >
                                            {content}
                                        </a>
                                    );
                                }

                                return (
                                    <div key={badge.label} className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-400">
                                        {content}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="grid min-w-60 grid-cols-2 gap-3">
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-md border border-neutral-200 bg-neutral-50 p-4 dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-800/60">
                                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                <div className="mt-1 text-sm font-semibold text-neutral-700 dark:text-neutral-400">{stat.label}</div>
                                <div className="mt-1 text-xs leading-5 text-neutral-500">{stat.hint}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="mb-4 flex items-center gap-2">
                    <ScanLine className="h-5 w-5 text-accent" />
                    <h2 className="font-serif text-2xl font-bold text-primary">研究方向</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    {researchCards.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                whileHover={{ y: -3 }}
                                className={`rounded-lg border p-5 shadow-sm transition-shadow hover:shadow-md ${item.tone}`}
                            >
                                <Icon className="mb-4 h-8 w-8" />
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2 text-sm leading-6 opacity-90">{item.subtitle}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <section className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-900">
                <div className="mb-5 flex items-center gap-2">
                    <Workflow className="h-5 w-5 text-accent" />
                    <h2 className="font-serif text-2xl font-bold text-primary">研究地图</h2>
                </div>
                <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr] lg:items-center">
                    <div className="rounded-lg border border-accent/30 bg-accent/10 p-5 text-center">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-accent text-white">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-primary">可解释、可复核的法医学影像 AI</h3>
                        <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-500">
                            从影像采集、自动测量、模型预测到结果复核，形成面向年龄推断和医学辅助诊断的闭环流程。
                        </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {researchMap.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="rounded-md border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800/70">
                                    <Icon className="mb-3 h-5 w-5 text-accent" />
                                    <h3 className="text-sm font-semibold text-primary">{item.title}</h3>
                                    <p className="mt-1 text-xs leading-5 text-neutral-500">{item.detail}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-900">
                <div className="mb-5 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    <h2 className="font-serif text-2xl font-bold text-primary">成果索引</h2>
                </div>
                <div className="grid gap-3">
                    {publicationTitles.map((title, index) => (
                        <div key={title} className="flex gap-3 rounded-md border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800/70">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-bold text-white dark:bg-neutral-700">
                                {index + 1}
                            </div>
                            <p className="text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400">{title}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-900">
                <div className="mb-5 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-accent" />
                    <h2 className="font-serif text-2xl font-bold text-primary">项目与学术轨迹</h2>
                </div>
                <div className="space-y-5">
                    {projectTimeline.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={`${item.year}-${item.title}`} className="grid grid-cols-[4.5rem_1fr] gap-4">
                                <div className="text-sm font-bold text-accent">{item.year}</div>
                                <div className="relative border-l border-neutral-200 pb-5 pl-5 last:pb-0 dark:border-neutral-700">
                                    <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white text-accent dark:border-neutral-700 dark:bg-neutral-900">
                                        <Icon className="h-3.5 w-3.5" />
                                    </span>
                                    <h3 className="font-semibold text-primary">{item.title}</h3>
                                    <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-500">{item.detail}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                    <div className="mb-4 flex items-center gap-2">
                        <Code2 className="h-5 w-5 text-accent" />
                        <h2 className="font-serif text-2xl font-bold text-primary">技术能力</h2>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {skillItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.label} className="flex items-center gap-3 rounded-md border border-neutral-200 bg-white p-4 shadow-sm dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-900">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-400">{item.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-800/50">
                    <div className="mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-accent" />
                        <h2 className="font-serif text-2xl font-bold text-primary">荣誉徽章</h2>
                    </div>
                    <div className="space-y-2">
                        {honorBadges.map((honor) => (
                            <div key={honor} className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-neutral-700 shadow-sm dark:bg-neutral-900 dark:text-neutral-400">
                                <BadgeCheck className="h-4 w-4 shrink-0 text-accent" />
                                {honor}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {news.length > 0 && (
                <section className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-800/50">
                    <div className="mb-3 flex items-center gap-2">
                        <FileSearch className="h-5 w-5 text-accent" />
                        <h2 className="font-serif text-2xl font-bold text-primary">近期动态</h2>
                    </div>
                    <div className="space-y-3">
                        {news.slice(0, 3).map((item) => (
                            <div key={`${item.date}-${item.content}`} className="flex gap-3 text-sm leading-6">
                                <span className="shrink-0 font-semibold text-accent">{item.date}</span>
                                <span className="text-neutral-700 dark:text-neutral-500">{item.content}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </motion.section>
    );
}
