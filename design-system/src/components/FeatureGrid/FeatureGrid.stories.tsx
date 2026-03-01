import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FeatureGrid } from './FeatureGrid';

const meta = {
    title: 'Design System/FeatureGrid',
    component: FeatureGrid,
    
    tags: ['autodocs'],parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof FeatureGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// Generic Icons for demonstration (based on the requested visual language)
const QuestionBubbleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <path d="M12 17h.01"></path>
    </svg>
);

const DocumentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
);

const ChartUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

const ListIcons = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
);

export const OQueVocePodeCriar: Story = {
    args: {
        cards: [
            {
                icon: <QuestionBubbleIcon />,
                title: 'Stories: Caixinha de perguntas',
                description: 'Transforme perguntas simples em respostas estratégicas que demonstram expertise, geram conexão emocional, aplicam storytelling para prender atenção e incluem CTAs sutis que direcionam para suas ofertas.',
                buttonLabel: 'Testar stories agora',
            },
            {
                icon: <DocumentIcon />,
                title: 'Storytelling: Reels e TikTok',
                description: (
                    <>
                        <span>Narrativas que Prendem os Primeiros 3 Segundos</span>
                        <span>Crie roteiros de Reels e TikTok usando frameworks de storytelling: hook magnético nos primeiros 0.5s (pattern interrupt), estrutura Hero’s Journey adaptada para vídeos curtos, gatilhos de curiosidade que evitam scroll.</span>
                    </>
                ),
                buttonLabel: 'Criar roteiro virtual',
            },
            {
                icon: <ChartUpIcon />,
                title: 'Legenda reflexiva para posts',
                description: 'Copy completa + estrutura de landing page otimizada: headline com fórmula de valor claro, subheadlines que amplificam desejo, bullets de benefício (não features), social proof estratégico.',
                buttonLabel: 'Criar minha landing page',
            },
            {
                icon: <ListIcons />,
                title: 'Criativos: Alta conversão',
                description: 'Copy para anúncios pagos otimizada para conversão: headlines com fórmulas testadas (4U’s de Michael Masterson), bullets de benefício irresistíveis, offer stack que maximiza valor percebido.',
                buttonLabel: 'Criar copy de anúncio',
            }
        ],
    },
};
