// import Image from 'next/image';

export default function Home() {
  return (
    <div>
      Hello Boston <i className="fa-solid fa-house"></i>
      <img src="/images/logo.jpg" alt="Alt"></img>
      <button className="button button-primary">Button Primary</button>
      <button className="button button-primary button-large">
        Button Primary Large
      </button>
      <a className="button button-primary">Button Primary</a>
      <a className="button button-primary button-large">Button Primary Large</a>
      <div className="mt-5">
        <button className="button-large button button-primary">
          Button Primary
        </button>
        <button className="button-large button button-primary button-large">
          Button Primary Large
        </button>
        <a className="button-large button button-primary">Button Primary</a>
        <a className="button-large button button-primary button-large">
          Button Primary Large
        </a>
      </div>
    </div>
  );
}
