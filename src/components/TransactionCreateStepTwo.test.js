/* eslint-disable prettier/prettier */
import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial render, the pay button is disabled", () => {
    render(<TransactionCreateStepTwo sender={{id:'4'}} receiver={{id:'4'}} /> )

    screen.debug();
});

