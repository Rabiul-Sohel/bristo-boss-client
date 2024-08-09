

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center w-4/12 mx-auto my-8">
            <h4 className="text-orange-300 italic pb-3"> --- {subHeading} --- </h4>
            <h2 className="border-y-2 py-4 text-3xl uppercase"> {heading} </h2>
        </div>
    );
};

export default SectionTitle;