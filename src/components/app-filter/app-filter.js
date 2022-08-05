import "./app-filter.css";

const AppFilter = (props) => {

    const {onPromotion,onSalary} = props;

    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    Все сотрудники
            </button>
            <button type="button"
                    className="btn btn-outline-light"
                    onClick={onPromotion}>
                    На повышение
            </button>
            <button type="button"
                    className="btn btn-outline-light"
                    onClick={onSalary}>
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;