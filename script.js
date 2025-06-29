const { useState, useEffect, useCallback } = React;

// Icones simplificades
const Brain = ({ className }) => (
    React.createElement('svg', { className, fill: 'currentColor', viewBox: '0 0 24 24' },
        React.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
    )
);

const Trophy = ({ className }) => (
    React.createElement('svg', { className, fill: 'currentColor', viewBox: '0 0 24 24' },
        React.createElement('path', { d: 'M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V7C19 10.31 16.31 13 13 13H11C7.69 13 5 10.31 5 7V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V7C7 9.21 8.79 11 11 11H13C15.21 11 17 9.21 17 7V6H7Z' }),
        React.createElement('path', { d: 'M9 15H15V17H9V15ZM7 19H17V21H7V19Z' })
    )
);

const ArrowRight = ({ className }) => (
    React.createElement('svg', { className, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
        React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M9 5l7 7-7 7' })
    )
);

const RotateCcw = ({ className }) => (
    React.createElement('svg', { className, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
        React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M1 4v6h6M3.51 15a9 9 0 1 0 2.13-9.36L1 10' })
    )
);

const Loader2 = ({ className }) => (
    React.createElement('svg', { className, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
        React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83' })
    )
);

const Star = ({ className }) => (
    React.createElement('svg', { className, fill: 'currentColor', viewBox: '0 0 24 24' },
        React.createElement('path', { d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' })
    )
);

const Heart = ({ className }) => (
    React.createElement('svg', { className, fill: 'currentColor', viewBox: '0 0 24 24' },
        React.createElement('path', { d: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' })
    )
);

const Sparkles = ({ className }) => (
    React.createElement('svg', { className, fill: 'currentColor', viewBox: '0 0 24 24' },
        React.createElement('path', { d: 'M12 1L9 9L1 12L9 15L12 23L15 15L23 12L15 9L12 1Z' })
    )
);

const QuizBiblic = () => {
    const [nivell, setNivell] = useState(1);
    const [puntuacio, setPuntuacio] = useState(0);
    const [preguntaActual, setPreguntaActual] = useState(null);
    const [respostaSeleccionada, setRespostaSeleccionada] = useState('');
    const [mostrarResultat, setMostrarResultat] = useState(false);
    const [carregant, setCarregant] = useState(false);
    const [historialPreguntes, setHistorialPreguntes] = useState([]);
    const [correctesConsecutives, setCorrectesConsecutives] = useState(0);
    const [preguntes, setPreguntes] = useState({});
    const [preguntesUsades, setPreguntesUsades] = useState(new Set());

    const nivellsNoms = {
        1: 'Petit Explorer 🌱',
        2: 'Jove Aventurer 🦋',
        3: 'Savi Descobridor 🌟',
        4: 'Mestre Bíblic 👑',
        5: 'Llegenda Sagrada ✨'
    };

    const emojisNivell = {
        1: '🌱',
        2: '🦋', 
        3: '🌟',
        4: '👑',
        5: '✨'
    };

    // Carregar preguntes del JSON
    useEffect(() => {
        const carregarPreguntes = async () => {
            try {
                const response = await fetch('./preguntes.json');
                const data = await response.json();
                setPreguntes(data);
            } catch (error) {
                console.error('Error carregant preguntes:', error);
                // Preguntes de fallback
                setPreguntes({
                    nivell1: [{
                        pregunta: "Quin va ser el primer home que Déu va crear?",
                        opcions: ["A) Abel", "B) Adam", "C) Noè", "D) Abraham"],
                        resposta_correcta: "B",
                        explicacio: "Adam va ser el primer home que Déu va crear del fang de la terra!"
                    }]
                });
            }
        };

        carregarPreguntes();
    }, []);

    const seleccionarPregunta = useCallback(() => {
        const preguntesNivell = preguntes[`nivell${nivell}`] || [];
        if (preguntesNivell.length === 0) return null;

        // Filtra preguntes no usades
        const preguntesDisponibles = preguntesNivell.filter((_, index) => 
            !preguntesUsades.has(`${nivell}-${index}`)
        );

        // Si s'han usat totes, reinicia per aquest nivell
        if (preguntesDisponibles.length === 0) {
            const novesUsades = new Set([...preguntesUsades].filter(key => !key.startsWith(`${nivell}-`)));
            setPreguntesUsades(novesUsades);
            return preguntesNivell[Math.floor(Math.random() * preguntesNivell.length)];
        }

        const indexOriginal = preguntesNivell.findIndex(p => preguntesDisponibles.includes(p));
        const preguntaSeleccionada = preguntesDisponibles[Math.floor(Math.random() * preguntesDisponibles.length)];
        
        // Marca com usada
        setPreguntesUsades(prev => new Set([...prev, `${nivell}-${indexOriginal}`]));
        
        return preguntaSeleccionada;
    }, [nivell, preguntes, preguntesUsades]);

    const generarPregunta = useCallback(() => {
        setCarregant(true);
        setTimeout(() => {
            const novaPregunta = seleccionarPregunta();
            setPreguntaActual(novaPregunta);
            setRespostaSeleccionada('');
            setMostrarResultat(false);
            setCarregant(false);
        }, 500);
    }, [seleccionarPregunta]);

    const comprovarResposta = () => {
        if (!respostaSeleccionada || !preguntaActual) return;

        const esCorrecta = respostaSeleccionada === preguntaActual.resposta_correcta;
        setMostrarResultat(true);

        setHistorialPreguntes(prev => [...prev, {
            ...preguntaActual,
            respostaUsuari: respostaSeleccionada,
            correcta: esCorrecta
        }]);

        if (esCorrecta) {
            setPuntuacio(prev => prev + nivell * 10);
            setCorrectesConsecutives(prev => prev + 1);
            
            if (correctesConsecutives >= 1 && nivell < 5) {
                setNivell(prev => prev + 1);
                setCorrectesConsecutives(0);
            }
        } else {
            setCorrectesConsecutives(0);
            if (nivell > 1) {
                setNivell(prev => prev - 1);
            }
        }
    };

    const seguentPregunta = () => {
        generarPregunta();
    };

    const reiniciarQuiz = () => {
        setNivell(1);
        setPuntuacio(0);
        setPreguntaActual(null);
        setRespostaSeleccionada('');
        setMostrarResultat(false);
        setHistorialPreguntes([]);
        setCorrectesConsecutives(0);
        setPreguntesUsades(new Set());
    };

    const iniciarQuiz = () => {
        generarPregunta();
    };

    return React.createElement('div', { 
        className: 'min-h-screen bg-crown p-4 relative overflow-hidden' 
    },
        // Elements decoratius animats
        React.createElement('div', { className: 'absolute inset-0 overflow-hidden pointer-events-none' },
            React.createElement('div', { className: 'absolute top-10 left-10 animate-bounce' },
                React.createElement(Star, { className: 'text-yellow-300 w-8 h-8 animate-sparkle-jewel' })
            ),
            React.createElement('div', { className: 'absolute top-20 right-16 animate-bounce delay-300' },
                React.createElement(Heart, { className: 'text-pink-300 w-6 h-6 animate-pulse-crown' })
            ),
            React.createElement('div', { className: 'absolute bottom-20 left-20 animate-bounce delay-500' },
                React.createElement(Sparkles, { className: 'text-purple-300 w-7 h-7 animate-crown' })
            ),
            React.createElement('div', { className: 'absolute top-1/3 right-8 animate-bounce delay-700' },
                React.createElement(Star, { className: 'text-blue-300 w-5 h-5 animate-sparkle-jewel' })
            ),
            React.createElement('div', { className: 'absolute bottom-32 right-1/4 animate-bounce delay-1000' },
                React.createElement(Heart, { className: 'text-yellow-300 w-6 h-6 animate-pulse-crown' })
            ),
            // Partícules de joies
            React.createElement('div', { className: 'particle particle-1' }),
            React.createElement('div', { className: 'particle particle-2' }),
            React.createElement('div', { className: 'particle particle-3' }),
            React.createElement('div', { className: 'particle particle-4' }),
            React.createElement('div', { className: 'particle particle-5' })
        ),

        React.createElement('div', { className: 'max-w-4xl mx-auto relative z-10' },
            // Header súper colorit
            React.createElement('div', { className: 'text-center mb-8' },
                React.createElement('div', { className: 'flex items-center justify-center gap-3 mb-4' },
                    React.createElement('div', { className: 'animate-spin-slow' },
                        React.createElement(Brain, { className: 'text-yellow-400 w-12 h-12 drop-shadow-lg' })
                    ),
                    React.createElement('h1', { 
                        className: 'text-5xl font-black text-purple-900 drop-shadow-lg shadow-crown animate-pulse-crown'
                    }, 'Quiz Bíblic Súper Genial!'),
                    React.createElement('div', { className: 'animate-bounce-crown' },
                        React.createElement(Trophy, { className: 'text-yellow-400 w-12 h-12 drop-shadow-lg' })
                    )
                ),
                React.createElement('p', { 
                    className: 'text-purple-800 text-xl font-bold drop-shadow-md animate-wiggle'
                }, '👑 Descobreix les històries més emocionants de la Bíblia! 👑'),
                React.createElement('p', { 
                    className: 'text-purple-900 text-lg font-bold drop-shadow-md mt-2'
                }, '✨ Corona de glòria i joies precioses! ✨')
            ),

            // Stats súper animats
            React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6 mb-8' },
                React.createElement('div', { 
                    className: 'bg-kid-gradient-1 rounded-3xl p-6 text-center hover-lift shadow-crown border-crown'
                },
                    React.createElement('div', { 
                        className: 'text-4xl font-black text-purple-900 drop-shadow-lg animate-bounce-crown'
                    }, `${emojisNivell[nivell]} ${nivell}`),
                    React.createElement('div', { 
                        className: 'text-purple-800 font-bold text-lg'
                    }, nivellsNoms[nivell])
                ),
                React.createElement('div', { 
                    className: 'bg-kid-gradient-2 rounded-3xl p-6 text-center hover-lift shadow-crown border-crown'
                },
                    React.createElement('div', { 
                        className: 'text-4xl font-black text-purple-900 drop-shadow-lg animate-pulse-crown'
                    }, `💎 ${puntuacio}`),
                    React.createElement('div', { 
                        className: 'text-purple-800 font-bold text-lg'
                    }, 'Punts de Corona!')
                ),
                React.createElement('div', { 
                    className: 'bg-kid-gradient-3 rounded-3xl p-6 text-center hover-lift shadow-crown border-crown'
                },
                    React.createElement('div', { 
                        className: 'text-4xl font-black text-purple-900 drop-shadow-lg animate-bounce'
                    }, `🎯 ${historialPreguntes.length}`),
                    React.createElement('div', { 
                        className: 'text-purple-800 font-bold text-lg'
                    }, 'Preguntes Fetes')
                )
            ),

            // Contingut principal súper animat
            React.createElement('div', { 
                className: 'bg-crown-soft rounded-3xl p-8 mb-6 shadow-crown border-crown'
            },
                !preguntaActual && !carregant ? 
                    React.createElement('div', { className: 'text-center' },
                        React.createElement('div', { className: 'text-8xl mb-6 animate-bounce-crown' }, '👑'),
                        React.createElement('h2', { 
                            className: 'text-4xl font-black text-purple-700 mb-6 text-crown'
                        }, 'Benvingut a l\'Aventura Bíblica!'),
                        React.createElement('p', { 
                            className: 'text-purple-600 mb-8 text-xl font-bold leading-relaxed'
                        }, 
                            '🎮 Prepara\'t per a un viatge increïble per les històries més emocionants de la Bíblia!', 
                            React.createElement('br'),
                            '👑 Corona de glòria amb joies precioses com l\'or, robí, maragda, safir i ametista!',
                            React.createElement('br'),
                            '🌟 Cada resposta correcta et fa pujar de nivell!',
                            React.createElement('br'),
                            '🎯 Quantes preguntes podràs respondre correctament?'
                        ),
                        React.createElement('button', {
                            onClick: iniciarQuiz,
                            className: 'bg-blue-700 hover:bg-blue-800 text-yellow-300 px-12 py-6 rounded-3xl font-black text-2xl transition-all duration-300 transform hover:scale-110 shadow-lg btn-special border-4 border-yellow-400'
                        }, '🚀 Començar l\'Aventura de la Corona! 🚀')
                    )
                : carregant ? 
                    React.createElement('div', { className: 'text-center py-12' },
                        React.createElement('div', { className: 'text-8xl mb-4 animate-crown' }, '👑'),
                        React.createElement(Loader2, { className: 'w-16 h-16 text-purple-500 animate-spin mx-auto mb-4' }),
                        React.createElement('p', { 
                            className: 'text-purple-600 text-2xl font-bold animate-pulse'
                        }, 'Preparant una pregunta súper genial...')
                    )
                : React.createElement('div', {},
                    React.createElement('div', { className: 'mb-6' },
                        React.createElement('div', { className: 'flex items-center justify-between mb-6' },
                            React.createElement('div', { 
                                className: 'bg-blue-700 text-yellow-300 px-6 py-3 rounded-2xl font-black text-lg shadow-lg border-4 border-yellow-400'
                            }, `${emojisNivell[nivell]} ${nivellsNoms[nivell]}`),
                            React.createElement('div', { 
                                className: 'text-purple-600 font-bold text-lg animate-pulse'
                            }, `Pregunta #${historialPreguntes.length + 1} 🎯`)
                        ),
                        React.createElement('div', { 
                            className: 'bg-white rounded-2xl p-6 border-crown shadow-crown mb-6'
                        },
                            React.createElement('h3', { 
                                className: 'text-2xl font-black text-purple-800 leading-relaxed animate-pulse'
                            }, `🤔 ${preguntaActual.pregunta}`)
                        )
                    ),

                    React.createElement('div', { className: 'space-y-4 mb-6' },
                        ...preguntaActual.opcions.map((opcio, index) => {
                            const lletra = opcio.charAt(0);
                            const isSelected = respostaSeleccionada === lletra;
                            const isCorrect = lletra === preguntaActual.resposta_correcta;
                            
                            let bgClass = 'bg-white hover:bg-crown-soft';
                            let borderClass = 'border-crown';
                            let textClass = 'text-purple-800';
                            let emoji = '🤷‍♀️';
                            
                            if (mostrarResultat) {
                                if (isCorrect) {
                                    bgClass = 'bg-kid-gradient-5';
                                    borderClass = 'border-green-500';
                                    textClass = 'text-white';
                                    emoji = '✅';
                                } else if (isSelected && !isCorrect) {
                                    bgClass = 'bg-kid-gradient-4';
                                    borderClass = 'border-red-500';
                                    textClass = 'text-white';
                                    emoji = '❌';
                                }
                            } else if (isSelected) {
                                bgClass = 'bg-purple-700';
                                borderClass = 'border-yellow-400';
                                textClass = 'text-yellow-300';
                                emoji = '👆';
                            }

                            return React.createElement('button', {
                                key: index,
                                onClick: () => !mostrarResultat && setRespostaSeleccionada(lletra),
                                disabled: mostrarResultat,
                                className: `w-full p-4 rounded-2xl border-4 text-left transition-all duration-300 font-bold text-lg ${bgClass} ${borderClass} ${!mostrarResultat ? 'hover-lift btn-special' : ''} shadow-lg`
                            }, React.createElement('span', {
                                className: textClass
                            }, `${emoji} ${opcio}`));
                        })
                    ),

                    mostrarResultat && React.createElement('div', { 
                        className: 'bg-white rounded-2xl p-6 mb-6 border-crown shadow-crown'
                    },
                        React.createElement('div', { 
                            className: `text-center mb-4 ${respostaSeleccionada === preguntaActual.resposta_correcta ? 'text-green-600' : 'text-red-600'}`
                        },
                            React.createElement('div', { className: 'text-6xl mb-2 animate-bounce-crown' },
                                respostaSeleccionada === preguntaActual.resposta_correcta ? '🎉' : '😅'
                            ),
                            React.createElement('h4', { className: 'text-3xl font-black mb-2 animate-bounce text-crown' },
                                respostaSeleccionada === preguntaActual.resposta_correcta ? '¡Súper bé!' : 'Quasi ho tens!'
                            )
                        ),
                        React.createElement('div', { className: 'bg-crown-soft rounded-xl p-4 border-2 border-purple-200' },
                            React.createElement('p', { className: 'text-purple-800 leading-relaxed font-bold' },
                                React.createElement('strong', {}, '🧠 Sabies que...'),
                                ` ${preguntaActual.explicacio}`
                            )
                        )
                    ),

                    React.createElement('div', { className: 'flex gap-4' },
                        !mostrarResultat ? 
                            React.createElement('button', {
                                onClick: comprovarResposta,
                                disabled: !respostaSeleccionada,
                                className: 'flex-1 bg-green-700 hover:bg-green-800 disabled:bg-gray-500 disabled:cursor-not-allowed text-yellow-300 px-8 py-4 rounded-2xl font-black text-xl transition-all duration-300 hover-lift shadow-lg border-4 border-yellow-400 btn-special'
                            }, '🎯 Comprovar Resposta!')
                        : React.createElement('button', {
                            onClick: seguentPregunta,
                            className: 'flex-1 bg-purple-700 hover:bg-purple-800 text-yellow-300 px-8 py-4 rounded-2xl font-black text-xl transition-all duration-300 flex items-center justify-center gap-3 hover-lift shadow-lg border-4 border-yellow-400 btn-special'
                        },
                            '🚀 Següent Aventura!',
                            React.createElement(ArrowRight, { className: 'w-6 h-6' })
                        ),
                        
                        React.createElement('button', {
                            onClick: reiniciarQuiz,
                            className: 'bg-red-700 hover:bg-red-800 text-yellow-300 px-8 py-4 rounded-2xl font-black text-xl transition-all duration-300 flex items-center gap-3 hover-lift shadow-lg border-4 border-yellow-400 btn-special'
                        },
                            React.createElement(RotateCcw, { className: 'w-6 h-6' }),
                            '🔄 Reiniciar'
                        )
                    )
                )
            ),

            // Progres súper colorit
            historialPreguntes.length > 0 && React.createElement('div', { 
                className: 'bg-white rounded-2xl p-6 border-crown shadow-crown'
            },
                React.createElement('h3', { 
                    className: 'text-2xl font-black text-purple-700 mb-4 text-crown'
                }, '🌟 Les Teves Últimes Aventures'),
                React.createElement('div', { className: 'flex gap-3 flex-wrap' },
                    ...historialPreguntes.slice(-10).map((pregunta, index) => (
                        React.createElement('div', {
                            key: index,
                            className: `w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black border-4 border-white shadow-crown transform hover:scale-125 transition-all duration-300 ${
                                pregunta.correcta 
                                    ? 'bg-kid-gradient-5 text-white animate-bounce-crown' 
                                    : 'bg-kid-gradient-4 text-white animate-wiggle'
                            }`,
                            title: pregunta.pregunta
                        }, pregunta.correcta ? '🎉' : '💪')
                    ))
                ),
                React.createElement('p', { 
                    className: 'text-purple-600 font-bold mt-3 text-center'
                }, `${historialPreguntes.filter(p => p.correcta).length} correctes de ${historialPreguntes.length} preguntes! 👑`)
            )
        )
    );
};

ReactDOM.render(React.createElement(QuizBiblic), document.getElementById('root'));