import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';
function ColumnLinkItem({item}) {
  return item.html ? (
    <li
      className="footer__item"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}
function Column({column}) {
  return (
    <div className="col footer__col">
      <div className="footer__title">{column.title}</div>
      <ul className="footer__items clean-list">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}
export default function FooterLinksMultiColumn({columns}) {
  return (
    <div className="row footer__links">
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
      <div>
        <div className="footer__title" style={{textAlign: "center"}}>社群</div>
        <ul className="footer__items clean-list">
          <img src="./img/qrcode-logo.png" height="100" width="100" />
          <p style={{textAlign: "center", fontSize: "10px", marginTop: "5px"}}>扫码加入微信群</p>
        </ul>
      </div>
      
    </div>
  );
}
