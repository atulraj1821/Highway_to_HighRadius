import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AnalyticsView = () => {
    const [distributionChannel, setDistributionChannel] = useState("");
    const [customerNumber, setCustomerNumber] = useState("");
    const [showCharts, setShowCharts] = useState(false);
    const [barChartData, setBarChartData] = useState([]);
    const [pieChartData, setPieChartData] = useState([]);

    const handleViewClick = () => {
        setShowCharts(true);
    };

    useEffect(() => {
        // You can perform any data processing or API calls here to fetch chart data
        // Dummy data for demonstration purposes
        // Replace with your actual chart data
        const fetchedBarChartData = [
            { name: "Category 1", value: 10 },
            { name: "Category 2", value: 15 },
            { name: "Category 3", value: 20 },
        ];
        const fetchedPieChartData = [
            { name: "Option 1", value: 30 },
            { name: "Option 2", value: 20 },
            { name: "Option 3", value: 50 },
        ];
        setBarChartData(fetchedBarChartData);
        setPieChartData(fetchedPieChartData);
    }, []);

    const renderCharts = () => {
        const barOptions = {
            chart: {
                type: "bar",
                width: 300, // Adjust the width as needed
            },
            title: {
                text: "Bar Chart",
            },
            xAxis: {
                categories: barChartData.map((data) => data.name),
            },
            yAxis: {
                title: {
                    text: "Value",
                },
            },
            series: [
                {
                    name: "Value",
                    data: barChartData.map((data) => data.value),
                },
            ],
        };

        const pieOptions = {
            chart: {
                type: "pie",
                width: 300, // Adjust the width as needed
            },
            title: {
                text: "Pie Chart",
            },
            series: [
                {
                    name: "Value",
                    data: pieChartData.map((data) => ({
                        name: data.name,
                        y: data.value,
                    })),
                },
            ],
        };

        // Render the charts
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ marginRight: "10px" }}>
                    <HighchartsReact highcharts={Highcharts} options={barOptions} />
                </div>
                <div>
                    <HighchartsReact highcharts={Highcharts} options={pieOptions} />
                </div>
            </div>
        );
    };

    return (
        <div>
            <div>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        placeholder="Distribution Channel"
                        value={distributionChannel}
                        onChange={(e) => setDistributionChannel(e.target.value)}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        placeholder="Customer Number"
                        value={customerNumber}
                        onChange={(e) => setCustomerNumber(e.target.value)}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <button onClick={handleViewClick} style={{ color: "grey" }}>
                        View
                    </button>
                </div>
            </div>
            {showCharts && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "20px",
                    }}
                >
                    {renderCharts()}
                </div>
            )}
        </div>
    );
};

export default AnalyticsView;