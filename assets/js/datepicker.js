document.addEventListener("DOMContentLoaded", () => {
    const fromInput = document.querySelector("#fromDate");
    const toInput = document.querySelector("#toDate");

    const fp = flatpickr(fromInput, {
        dateFormat: "d-m-Y",
        onChange: function (selectedDates, dateStr, instance) {
            toPicker.set("minDate", dateStr);
        },
    });

    const toPicker = flatpickr(toInput, {
        dateFormat: "d-m-Y",
    });
});
