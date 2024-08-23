import { OverlayContext } from "@/context/OverlayContext";
import { useContext } from "react";
import styled from "styled-components";

export const Overlay = () => {
    const context = useContext(OverlayContext);

    function handleClickOutside(e: React.MouseEvent) {
        if (e.target === e.currentTarget) {
            context.hideOverlay();
        }
    };

    return (
        <>
            {context.isVisible && (
                <Wrapper onClick={handleClickOutside}>
                    {context.content}
                </Wrapper>
            )}
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.75);
    z-index: 9999;
    overflow: auto;
`;