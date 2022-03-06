# mdprocess

Heavily customisable browser-based Markdown renderer

## Usage

1. Download and extract the code
2. Open `markdown.xhtml` in a JS-supporting browser (no compilation/setup)
3. Select processing options with checkboxes
    - **Render table**: transforms code blocks with info string `table` into actual tables (whitespace-separated fields)
    - **Transform inlines**: does nothing
    - **Show interpreted Markdown**: puts debug output in the "interpreted Markdown" section
    - **Table of contents**: generates a hierarchical table of contents based on headings, placed at the start of the document
    - **Heading fragments**: generates `id`'d links for each heading, so that one may link to individual sections by URL fragments
    - **Display info strings**: displays the info string for each code block in their upper-right corners (overriden by Prism)
    - **Show constructed AST**: puts debug output in the "output XML AST" section
    - **Write HTML source**: puts generated HTML in the "output HTML source" section
    - **Write to #outpdoc**: puts generated HTML for rendering in the main output section
    - **Prism syntax highlighting**: uses Prism.js for syntax highlighting in code blocks
4. Put Markdown into the text box
5. See the Markdown rendered (unless you disabled Write to #outpdoc) below
6. Adjust the styling in the "stylesheet" section (plain CSS)
    - The rendered content is in the `#outpdoc` element
