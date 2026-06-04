'use client';

import { motion } from 'framer-motion';
import {
    Activity,
    BadgeCheck,
    Bot,
    Brain,
    Code2,
    Database,
    FileSearch,
    GraduationCap,
    Microscope,
    Network,
    ScanLine,
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

const projectTimeline = [
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
    { label: '三维深度学习', icon: CpuIcon },
    { label: 'Python 科研脚本', icon: Code2 },
    { label: '大模型 API', icon: Bot },
];

function CpuIcon({ className }: { className?: string }) {
    return <Bot className={className} />;
}

export default function VisualAcademicHome({ publications, news }: VisualAcademicHomeProps) {
    const firstAuthorCount = 6;
    const coFirstCount = 2;

    const stats = [
        { label: '论文成果', value: `${firstAuthorCount + coFirstCount}`, hint: `首页展示 ${publications.length} 篇代表论文` },
        { label: '第一作者', value: `${firstAuthorCount}`, hint: '含中英文期刊论文' },
        { label: '共同第一作者', value: `${coFirstCount}`, hint: 'CT 骨龄与深度学习方向' },
        { label: '研究主线', value: '4', hint: '年龄推断、影像、AI、LLM' },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
        >
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-900">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
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
                    </div>
                    <div className="grid min-w-56 grid-cols-2 gap-3">
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-800/60">
                                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                <div className="mt-1 text-sm font-semibold text-neutral-700 dark:text-neutral-400">{stat.label}</div>
                                <div className="mt-1 text-xs leading-5 text-neutral-500">{stat.hint}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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
                                className={`rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md ${item.tone}`}
                            >
                                <Icon className="mb-4 h-8 w-8" />
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2 text-sm leading-6 opacity-90">{item.subtitle}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-900">
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

            <section>
                <div className="mb-4 flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-accent" />
                    <h2 className="font-serif text-2xl font-bold text-primary">技术能力</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {skillItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.label} className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-900">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                                    <Icon className="h-5 w-5" />
                                </span>
                                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-400">{item.label}</span>
                            </div>
                        );
                    })}
                </div>
            </section>

            {news.length > 0 && (
                <section className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-800/50">
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
