export default function IfElse() {
    // Declare two boolean variables, true1 and false1
    let true1 = true, false1 = false;
    // Return the JSX to render
    return (
        <div id = "wd-if-else">
            <h4>If Else</h4>
            {/*
                This line uses the && operator to conditionally render <p>true1</p>.
                Since true1 is true, this line will render <p>true1</p>.
                If the left side is true, it returns the right side.
                If the left side is false, it returns false immediately and doesn’t evaluate the right side.
            */}
            {true1 && <p>true1</p>}
            {/*
                This line uses a conditional (ternary) operator to decide which <p> element to render:
                - If !false1 is true, it will render <p>!false1</p>.
                - If !false1 is false, it will render <p>false1</p>.
                <p> is the result that gets rendered when the condition is true

                Here, false1 is false, so !false1 is true.
                Therefore, <p>!false1</p> is rendered.
                Ternary operator is "three-element operator," which reflects its
                function of evaluating three parts: a condition, a true result, and a false result.

            */}
            {!false1 ? <p>!false1</p> : <p>false1</p> } <hr/>
        </div>
    );
}