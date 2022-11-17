import ProductTile from './catalog/ProductTile';

export default function BsCatalogPreview() {
  return (
    <section className="container">
      <header className="row">
        <h1>
          <span>Bootstrap demo</span> suits
        </h1>
        <p>
          Accomplish new achievements with a bold new style from the brilliant
          collection of men's designer suits. <br></br>
          For the finest custom tailored experience, be sure to explore our
          selection of premium fabrics from one of the world's oldest fabric
          mills, Vitale Barberis Canonico.
        </p>
      </header>

      <ul className="row">
        <li className="col-12 col-lg-3">
          <ProductTile></ProductTile>
        </li>
        <li className="col-12 col-lg-3 offset-lg-1">
          <ProductTile></ProductTile>
        </li>
        <li className="col-12 col-lg-3 offset-lg-1">
          <ProductTile></ProductTile>
        </li>
      </ul>
    </section>
  );
}
