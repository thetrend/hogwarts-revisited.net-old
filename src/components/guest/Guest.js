
import logo from '../svg/logo.svg';

const Guest = (props) => {
  return (
    <>
      <img src={logo} alt="Hogwarts Revisited Coming Soon" className="max-w-sm border-white border-8 shadow-2xl md:ml-10" />
      <div className="max-w-lg mt-10 px-8 mb-20 md:mb-0 flex-grow">
        {props.children}
      </div>
    </>
  );
}

export default Guest;
