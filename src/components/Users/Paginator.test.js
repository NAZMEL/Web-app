import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";

describe('Paginator tests', () => {
    test('pages count is 11, but should be shown only 10', () => {
        const component = create(<Paginator totalUsersCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    });

    test('if pages count is more than 10 button NEXT should by shown', ()=>{
        const component = create(<Paginator totalUsersCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        let buttons = root.findAllByType("button");
        expect(buttons.length).toBe(1);
    })
})