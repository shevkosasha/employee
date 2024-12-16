import "./app-info.css";

const AppInfo = (props) => {
    const {info} = props
    return (
        <div className="app-info">
            <h1>Company Employee Management</h1>
            <h2>Total Number: {info.totalEmployees}</h2>
            <h2>Rewarded: {info.rewardedEmployeesNumber}</h2>
        </div>
    )
}

export default AppInfo;