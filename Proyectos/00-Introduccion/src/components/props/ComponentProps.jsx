// imports
//globals
const Card = (props) => {
  const { title, description, bgColor } = props;
  return (
    <div className={`p-4 rounded-md shadow-md ${bgColor}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
};

const ComponentProps = () => {
  // hooks
  // vars
  // functs

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-4">
        <Card
          title="Tarjeta1"
          description="contenido tarjeta1"
          bgColor="bg-green-200"
        />
        <Card
          title="Tarjeta2"
          description="contenido tarjeta2"
          bgColor="bg-lime-200"
        />
        <Card
          title="Tarjeta3"
          description="contenido tarjeta3"
          bgColor="bg-blue-200"
        />
        <Card
          title="Tarjeta4"
          description="contenido tarjeta4"
          bgColor="bg-indigo-400"
        />
      </div>
    </>
  );
};

export default ComponentProps;
