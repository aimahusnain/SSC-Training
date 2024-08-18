'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
    {
        id: "1",
        title: "8.1 DOMAIN THEORY OF MAGNETISM",
        links: [
            { href: "/physics/unit-9/domain-theory-of-magentism/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-9/domain-theory-of-magentism/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-9/domain-theory-of-magentism/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-9/domain-theory-of-magentism/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-9/domain-theory-of-magentism/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-9/domain-theory-of-magentism/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "2",
        title: "8.2 MAGNETIC FIELD",
        links: [
            { href: "/physics/unit-9/magnetic-field/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-9/magnetic-field/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-9/magnetic-field/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-9/magnetic-field/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-9/magnetic-field/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-9/magnetic-field/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "3",
        title: "8.3 INDUCED MAGNETISM",
        links: [
            { href: "/physics/unit-9/induced-magnetism/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-9/induced-magnetism/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-9/induced-magnetism/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-9/induced-magnetism/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-9/induced-magnetism/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-9/induced-magnetism/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "4",
        title: "8.4 TYPES OF MAGNETIC MATERIALS",
        links: [
            { href: "/physics/unit-9/types-of-magnetic-materials/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-9/types-of-magnetic-materials/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-9/types-of-magnetic-materials/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-9/types-of-magnetic-materials/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-9/types-of-magnetic-materials/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-9/types-of-magnetic-materials/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "8.5 EARTH'S MAGNETIC FIELD",
        links: [
            { href: "/physics/unit-9/earths-magnetic-field/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-9/earths-magnetic-field/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-9/earths-magnetic-field/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-9/earths-magnetic-field/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-9/earths-magnetic-field/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-9/earths-magnetic-field/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "6",
        title: "Chapter Round up",
        links: [
            { href: "/physics/unit-9/summary", text: "Summary", icon: BookOpen },
            { href: "/physics/unit-9/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/physics/unit-9/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-9/detailed-questions", text: "Detailed Questions", icon: List },
            { href: "/physics/unit-9/content", text: "Content", icon: List },
        ],
    },
];

const Section = ({ section }: any) => {
    return (
        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] mb-6 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg"
            style={{
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}>
            <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
            <div className="grid grid-cols-2 gap-2">
                {section.links.map((link: any) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center space-x-2 p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
                    >
                        {React.createElement(link.icon, { size: 18 })}
                        <span className="text-sm">{link.text}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

const ComputerSystemsDashboard = () => {
    return (
        <div className="min-h-screen text-white p-8 bg-gradient-to-br from-gray-900 to-gray-800" style={{
            fontFamily: '"Poppins", sans-serif'
        }}>
            <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
                MAGNETISM            </h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {data.map((section) => (
                    <Section key={section.id} section={section} />
                ))}
            </div>
        </div>
    );
};

export default ComputerSystemsDashboard;