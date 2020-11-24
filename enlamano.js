import axios from "axios";
import { version } from "./package.json";

const enlamano = (username, password, host, strict = true) => {
    if (!username || !password || !host) {
        throw new Error("Hacen falta algunos parámetros...");
    } else if (
        typeof username !== "string" ||
        typeof password !== "string" ||
        typeof host !== "string"
    ) {
        throw new Error(
            "Los parámetros usuario, contraseña y url deben ser de tipo String."
        );
    }

    const options = {
        host,
        username,
        password,
    };

    return {
        request: (data) => makeCall(options, data),
    };
};

const makeCall = async (config, params) => {
    try {
        const axiosConfig = {
            url: encodeURI(config.host),
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": `node-enlamano/${version}`,
            },
            auth: {
                username: config.username,
                password: config.password,
            },
            data: params,
        };

        const response = await axios(axiosConfig).then((result) => {
            return result.data;
        });

        return response;
    } catch (error) {
        return  error.response.data;
    }
};

export default enlamano;
