import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="TestStatus" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("TestStatus");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="Test from span" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
        // expect(span.children.length).toBe(1);
    });

    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="Test from span" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[1]).toBe("Test from span");
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="Test from span" />);
        const root = component.root;

        expect( ()=>{
            const input = root.findByType("input");
        }).toThrow();
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Test from input" />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("Test from input");
    });

    //JEst Spyon function(for callback)
    test("callback should be called", ()=>{
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="test callback" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })


});