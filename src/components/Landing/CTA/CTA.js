import React from 'react';
import {Button} from 'reactstrap';
import styled from 'styled-components';

function CTA() {

    const CTA = styled.div`
        z-index: 300;

    `
    return(
        <CTA className="CTA">
            <a href="#previous-APODs" style={{zIndex: "1000"}}>
                <Button color="outline-light">Previous APODs {"\u25BC"}</Button>
            </a>
        </CTA>
    )
}

export default CTA