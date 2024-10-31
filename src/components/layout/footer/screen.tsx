import { StyledFooter } from "../styled";

export default ({ children }: { children?: React.ReactNode }) => {

    return (
        <StyledFooter hasChildren={!!children}>{children}</StyledFooter>
    )
};