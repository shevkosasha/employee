import "./app-info.css";

const AppInfo = (props) => {
    const {info} = props
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {info.totalEmployees}</h2>
            <h2>Премию получат: {info.rewardedEmployeesNumber}</h2>
        </div>
    )
}

export default AppInfo;