const Values = (props) => {
    const { className, value } = props;
    return (
        <div>
            <h3 className={className}>
                R${value}
            </h3>
        </div>
    );
};

export default Values;