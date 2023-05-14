import Loader from 'react-content-loader';

const Spinner = () => {
  return (
    <div className="spinner">
      <Loader type="Oval" color="#3f51b5" height={50} width={50} />
    </div>
  );
};

export default Spinner;
