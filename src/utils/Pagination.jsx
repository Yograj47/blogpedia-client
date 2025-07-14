function Pagination({ totalPost, postPerPage, setCurrPage, currPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  const paginationStyle = {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    margin: '16px 0'
  };

  const pageStyle = {
    padding: '6px 12px',
    border: '1px solid #111',
    borderRadius: '4px',
    cursor: 'pointer',
    background: '#f9f9f9',
    transition: 'background 0.2s',
    fontSize: "1.2rem"
  };

  const activePageStyle = {
    ...pageStyle,
    background: '#007bff',
    color: '#fff',
    border: '1px solid #007bff',
    fontWeight: 'bold',

  };

  return (
    <div style={paginationStyle}>
      {pages.map((n, i) => (
        <button
          key={i}
          style={currPage === n ? activePageStyle : pageStyle}
          onClick={() => setCurrPage(n)}
        >
          {n}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
