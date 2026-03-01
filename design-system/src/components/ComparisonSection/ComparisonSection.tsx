import './ComparisonSection.css';

export const ComparisonSection = () => {
  const rows = [
    { label: 'Treinado em livros de copy', others: false, chatgpt: false },
    { label: 'Frameworks específicos', others: '–', chatgpt: '–' },
    { label: 'Base de conhecimento RAG', others: false, chatgpt: false },
    { label: 'Templates por nicho', others: '–', chatgpt: '–' },
    { label: 'Histórico salvo por projeto', others: false, chatgpt: false },
    { label: 'Copy adaptada ao Brasil', others: '–', chatgpt: '–' },
  ];

  return (
    <section className="ds-comparison">
      <div className="ds-comparison__inner">
        <h3 className="ds-comparison__pre-title">COPY.POCKET VS. OUTRAS PLATAFORMAS</h3>
        <h2 className="ds-comparison__title">Compare na prática</h2>

        <div className="ds-comparison__table">

          <div className="ds-comparison__col ds-comparison__col-features">
            <div className="ds-comparison__head ds-comparison__head-features">Funcionalidade</div>
            {rows.map((r, i) => (
              <div className="ds-comparison__cell ds-comparison__cell-feature" key={'f' + i}>{r.label}</div>
            ))}
          </div>

          <div className="ds-comparison__col ds-comparison__col-brand ds-pulse-glow">
            <div className="ds-comparison__head ds-comparison__head-brand">
              <img src="https://lp.thecopypocket.com/wp-content/uploads/2025/12/LOGO.svg" alt="Copy Pocket" className="ds-comparison__logo" />
            </div>
            {rows.map((_, i) => (
              <div className="ds-comparison__cell ds-comparison__cell-brand-item" key={'b' + i}>
                <img
                  src="https://lp.thecopypocket.com/wp-content/uploads/2025/12/lucide_verified-1.png"
                  alt="Check"
                  className="ds-comparison__check"
                />
              </div>
            ))}
          </div>

          <div className="ds-comparison__col ds-comparison__col-other">
            <div className="ds-comparison__head ds-comparison__head-other">Outras plataformas</div>
            {rows.map((r, i) => (
              <div className="ds-comparison__cell ds-comparison__cell-other-item" key={'o' + i}>
                {r.others === false ? (
                  <img src="https://lp.thecopypocket.com/wp-content/uploads/2025/12/Group-2.svg" alt="Cross" className="ds-comparison__cross" />
                ) : (
                  <span>{r.others}</span>
                )}
              </div>
            ))}
          </div>

          <div className="ds-comparison__col ds-comparison__col-chatgpt">
            <div className="ds-comparison__head ds-comparison__head-chatgpt">ChatGPT</div>
            {rows.map((r, i) => (
              <div className="ds-comparison__cell ds-comparison__cell-chatgpt-item" key={'c' + i}>
                {r.chatgpt === false ? (
                  <img src="https://lp.thecopypocket.com/wp-content/uploads/2025/12/Group-2.svg" alt="Cross" className="ds-comparison__cross" />
                ) : (
                  <span>{r.chatgpt}</span>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
