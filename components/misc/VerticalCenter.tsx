import { Box, BoxProps } from "@mui/material";

export type VerticalCenterProps = BoxProps;

const VerticalCenter = ({ sx, children, ...rest }: VerticalCenterProps) => {
    return (
        <Box
            {...rest}
            sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                ...sx,
            }}
        >
            {children}
        </Box>
    );
};

export default VerticalCenter;