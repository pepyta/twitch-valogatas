import { Card, CardContent, Typography } from "@mui/material";
import Script from "next/script";

const Youtube = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant={"h5"} gutterBottom>
                    Youtube
                </Typography>
                <Script src="https://apis.google.com/js/platform.js" />
                <div className="g-ytsubscribe" data-channelid="UCOtZa4kpUo9c1DiTnN6AfJQ" data-layout="full" data-theme="dark" data-count="default"></div>
            </CardContent>
        </Card>
    );
};

export default Youtube;