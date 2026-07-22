const phoneFormatter = (phone) => {
    const digits = phone.replace(/\D/g, "");

    if (digits.length !== 10) {
        throw new Error("Invalid mobile number");
    }

    return `91${digits}`;
};

export default phoneFormatter;