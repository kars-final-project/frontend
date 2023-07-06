import { styled } from "styled-components";

export const StyledSelect = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: 0;

    label {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.0625rem;
    }
    
    select {
        width: 100%;
        border: 1.5px solid var(--color-grey-7);
        border-radius: 0.25rem;
        padding: 1rem 1.5rem;
    }

    @media (min-width: 938px) {
        
    }
`;