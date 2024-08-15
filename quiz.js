document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            "question": "What does XML stand for?",
            "options": [
                "Extensible Markup Language",
                "Executable Multiple Language",
                "Extra Multi-Program Language",
                "Examine Multiple Language"
            ],
            "correctAnswers": ["Extensible Markup Language"],
            "type": "radio"
        },
        {
            "question": "Which of the following are main components of an XML document?",
            "options": [
                "Elements",
                "Attributes",
                "Tags",
                "Namespaces"
            ],
            "correctAnswers": ["Elements", "Attributes", "Namespaces"],
            "type": "checkbox"
        },
        {
            "question": "Which tag is used to define the root element in an XML document?",
            "options": [
                "Root",
                "Start",
                "End",
                "None of the above"
            ],
            "correctAnswers": ["None of the above"],
            "type": "radio"
        },
        {
            "question": "How is an XML comment written?",
            "options": [
                "<!-- comment -->",
                "<comment> comment </comment>",
                "// comment",
                "/* comment */"
            ],
            "correctAnswers": ["<!-- comment -->"],
            "type": "radio"
        },
        {
            "question": "What is an XML namespace used for?",
            "options": [
                "To avoid name conflicts",
                "To define data types",
                "To declare variables",
                "To create functions"
            ],
            "correctAnswers": ["To avoid name conflicts"],
            "type": "radio"
        },
        {
            "question": "Which of the following is a valid XML element?",
            "options": [
                "<element>",
                "<element/>",
                "<element>value</element>",
                "<element></element>"
            ],
            "correctAnswers": ["<element>", "<element/>", "<element>value</element>", "<element></element>"],
            "type": "checkbox"
        },
        {
            "question": "What is the purpose of the XML Declaration?",
            "options": [
                "To specify XML version and encoding",
                "To define the root element",
                "To add comments",
                "To declare namespaces"
            ],
            "correctAnswers": ["To specify XML version and encoding"],
            "type": "radio"
        },
        {
            "question": "Which of the following is not a valid XML data type?",
            "options": [
                "String",
                "Integer",
                "Boolean",
                "Float"
            ],
            "correctAnswers": ["String", "Integer", "Boolean", "Float"],
            "type": "radio"
        },
        {
            "question": "What does a well-formed XML document ensure?",
            "options": [
                "Correct syntax and structure",
                "Correct data types",
                "Correct file encoding",
                "All of the above"
            ],
            "correctAnswers": ["Correct syntax and structure"],
            "type": "radio"
        },
        {
            "question": "How do you define an attribute in an XML element?",
            "options": [
                "<element attribute='value'>",
                "<element value='attribute'>",
                "<element:attribute='value'>",
                "<element attribute=value>"
            ],
            "correctAnswers": ["<element attribute='value'>"],
            "type": "radio"
        },
        {
            "question": "Which of the following is a correct way to use CDATA in XML?",
            "options": [
                "<![CDATA[This is CDATA]]>",
                "<CDATA>This is CDATA</CDATA>",
                "<![CDATA[This is CDATA>]",
                "<![CDATA[This is CDATA]]"
            ],
            "correctAnswers": ["<![CDATA[This is CDATA]]>"],
            "type": "radio"
        },
        {
            "question": "What is the purpose of processing instructions in XML?",
            "options": [
                "To provide instructions to the XML processor",
                "To define namespaces",
                "To add comments",
                "To define data types"
            ],
            "correctAnswers": ["To provide instructions to the XML processor"],
            "type": "radio"
        },
        {
            "question": "What is an XML schema used for?",
            "options": [
                "To define the structure and data types of XML documents",
                "To create XML elements",
                "To add comments",
                "To provide instructions"
            ],
            "correctAnswers": ["To define the structure and data types of XML documents"],
            "type": "radio"
        },
        {
            "question": "What is the difference between well-formed and valid XML?",
            "options": [
                "Well-formed XML is structurally correct, while valid XML adheres to a schema",
                "Well-formed XML is valid XML",
                "Valid XML is structurally correct, while well-formed XML adheres to a schema",
                "There is no difference"
            ],
            "correctAnswers": ["Well-formed XML is structurally correct, while valid XML adheres to a schema"],
            "type": "radio"
        },
        {
            "question": "What does XPath stand for?",
            "options": [
                "XML Path Language",
                "Extensible Path Language",
                "XML Parsing Language",
                "Extensible Programming Language"
            ],
            "correctAnswers": ["XML Path Language"],
            "type": "radio"
        },
        {
            "question": "Which function is used in XPath to select nodes based on their value?",
            "options": [
                "text()",
                "name()",
                "position()",
                "attribute()"
            ],
            "correctAnswers": ["text()"],
            "type": "radio"
        },
        {
            "question": "What is an XML DTD?",
            "options": [
                "Document Type Definition",
                "Data Type Definition",
                "Document Translation Definition",
                "Data Translation Definition"
            ],
            "correctAnswers": ["Document Type Definition"],
            "type": "radio"
        },
        {
            "question": "Which of the following is true about XML elements?",
            "options": [
                "They must be properly nested",
                "They can be empty",
                "They are case-sensitive",
                "All of the above"
            ],
            "correctAnswers": ["All of the above"],
            "type": "radio"
        },
        {
            "question": "What is an XML entity used for?",
            "options": [
                "To define reusable values",
                "To create elements",
                "To add comments",
                "To format text"
            ],
            "correctAnswers": ["To define reusable values"],
            "type": "radio"
        },
        {
            "question": "Which of the following is an example of an XML processing instruction?",
            "options": [
                "<?xml version='1.0'?>",
                "<!-- comment -->",
                "<element attribute='value'>",
                "<!DOCTYPE root>"
            ],
            "correctAnswers": ["<?xml version='1.0'?>"],
            "type": "radio"
        },
        {
            "question": "How do you reference an XML namespace?",
            "options": [
                "xmlns:prefix='URI'",
                "namespace:prefix='URI'",
                "xmlns:URI='prefix'",
                "namespace:URI='prefix'"
            ],
            "correctAnswers": ["xmlns:prefix='URI'"],
            "type": "radio"
        },
        {
            "question": "Which of the following is a valid XML attribute value?",
            "options": [
                "'value'",
                "\"value\"",
                "<value>",
                "{value}"
            ],
            "correctAnswers": ["'value'", "\"value\""],
            "type": "checkbox"
        },
        {
            "question": "What does the '/*' selector do in XPath?",
            "options": [
                "Selects all elements at the root level",
                "Selects all child elements",
                "Selects all attributes",
                "Selects all text nodes"
            ],
            "correctAnswers": ["Selects all elements at the root level"],
            "type": "radio"
        },
        {
            "question": "Which of the following is a correct XML declaration?",
            "options": [
                "<?xml version='1.0' encoding='UTF-8'?>",
                "<xml version='1.0' encoding='UTF-8'>",
                "<!DOCTYPE xml>",
                "<?xml version='1.0'?>"
            ],
            "correctAnswers": ["<?xml version='1.0' encoding='UTF-8'?>", "<?xml version='1.0'?>"],
            "type": "checkbox"
        },
        {
            "question": "What does the '@' symbol do in XPath?",
            "options": [
                "Selects attributes",
                "Selects elements",
                "Selects text nodes",
                "Selects comments"
            ],
            "correctAnswers": ["Selects attributes"],
            "type": "radio"
        },
        {
            "question": "Which XML data type is used to store numeric values?",
            "options": [
                "xs:integer",
                "xs:string",
                "xs:boolean",
                "xs:date"
            ],
            "correctAnswers": ["xs:integer"],
            "type": "radio"
        },
        {
            "question": "What is the purpose of the 'xsi:schemaLocation' attribute?",
            "options": [
                "To specify the location of the XML schema",
                "To define XML namespaces",
                "To add comments",
                "To create elements"
            ],
            "correctAnswers": ["To specify the location of the XML schema"],
            "type": "radio"
        },
        {
            "question": "Which of the following is a valid XML element name?",
            "options": [
                "element1",
                "1element",
                "element-name",
                "element name"
            ],
            "correctAnswers": ["element1", "element-name"],
            "type": "checkbox"
        },
        {
            "question": "What is the correct syntax for a self-closing XML tag?",
            "options": [
                "<element/>",
                "<element></>",
                "<element/>/",
                "<element>"
            ],
            "correctAnswers": ["<element/>"],
            "type": "radio"
        },
        {
            "question": "How are XML elements ordered?",
            "options": [
                "Alphabetically",
                "By their appearance",
                "By their attributes",
                "In reverse order"
            ],
            "correctAnswers": ["By their appearance"],
            "type": "radio"
        },
        {
            "question": "What does the 'text()' function do in XPath?",
            "options": [
                "Selects the text content of an element",
                "Selects the name of an element",
                "Selects the attributes of an element",
                "Selects the child elements"
            ],
            "correctAnswers": ["Selects the text content of an element"],
            "type": "radio"
        },
        {
            "question": "Which of the following is not a valid XML element?",
            "options": [
                "<element></element>",
                "<element/>",
                "<element>value",
                "<element>value</element>"
            ],
            "correctAnswers": ["<element>value"],
            "type": "radio"
        },
        {
            "question": "What is the correct syntax for including an XML comment?",
            "options": [
                "<!-- This is a comment -->",
                "<! This is a comment !>",
                "// This is a comment",
                "/* This is a comment */"
            ],
            "correctAnswers": ["<!-- This is a comment -->"],
            "type": "radio"
        },
        {
            "question": "Which XPath expression selects the first child of an element?",
            "options": [
                "child::*[1]",
                "/*[1]",
                "first()",
                "element[1]"
            ],
            "correctAnswers": ["child::*[1]"],
            "type": "radio"
        },
        {
            "question": "What does the 'name()' function do in XPath?",
            "options": [
                "Selects the name of an element",
                "Selects the value of an attribute",
                "Selects the text content",
                "Selects the position of an element"
            ],
            "correctAnswers": ["Selects the name of an element"],
            "type": "radio"
        },
        {
            "question": "How is a namespace declared in XML?",
            "options": [
                "xmlns:prefix='URI'",
                "namespace:prefix='URI'",
                "xmlns='URI'",
                "namespace='URI'"
            ],
            "correctAnswers": ["xmlns:prefix='URI'"],
            "type": "radio"
        },
        {
            "question": "Which function is used to select the parent node in XPath?",
            "options": [
                "parent()",
                "ancestor()",
                "self()",
                "root()"
            ],
            "correctAnswers": ["parent()"],
            "type": "radio"
        },
        {
            "question": "What is the use of XML Schema Validation?",
            "options": [
                "To ensure that an XML document adheres to a defined structure",
                "To format XML documents",
                "To compress XML data",
                "To convert XML to HTML"
            ],
            "correctAnswers": ["To ensure that an XML document adheres to a defined structure"],
            "type": "radio"
        },
        {
            "question": "Which of the following is not a valid XML namespace?",
            "options": [
                "xmlns:prefix='http://example.com'",
                "xmlns:prefix='example.com'",
                "xmlns='http://example.com'",
                "xmlns:prefix='http://example.com/schema'"
            ],
            "correctAnswers": ["xmlns:prefix='example.com'"],
            "type": "radio"
        },
        {
            "question": "What is the purpose of the 'element' keyword in XML Schema?",
            "options": [
                "To define elements in the XML schema",
                "To create new namespaces",
                "To add comments to the schema",
                "To specify the schema version"
            ],
            "correctAnswers": ["To define elements in the XML schema"],
            "type": "radio"
        },
        {
            "question": "Which of the following is a valid XML attribute name?",
            "options": [
                "attributeName",
                "attribute-name",
                "attribute name",
                "1attribute"
            ],
            "correctAnswers": ["attributeName", "attribute-name"],
            "type": "checkbox"
        },
        {
            "question": "What does the 'ancestor::*' XPath expression select?",
            "options": [
                "All ancestor elements of the current node",
                "All child elements of the current node",
                "All sibling elements of the current node",
                "All descendant elements of the current node"
            ],
            "correctAnswers": ["All ancestor elements of the current node"],
            "type": "radio"
        },
        {
            "question": "How do you declare an XML document type?",
            "options": [
                "<!DOCTYPE root>",
                "<root>",
                "<?xml version='1.0'?>",
                "<!DOCTYPE xml>"
            ],
            "correctAnswers": ["<!DOCTYPE root>"],
            "type": "radio"
        },
        {
            "question": "What does the 'normalize-space()' function do in XPath?",
            "options": [
                "Removes leading and trailing whitespace from a string",
                "Selects the text content",
                "Formats the XML document",
                "Selects all child elements"
            ],
            "correctAnswers": ["Removes leading and trailing whitespace from a string"],
            "type": "radio"
        },
        {
            "question": "Which of the following is a valid XML processing instruction?",
            "options": [
                "<?xml-stylesheet href='style.css'?>",
                "<!xml-stylesheet href='style.css'?>",
                "<?xml-stylesheet style='style.css'?>",
                "<xml-stylesheet href='style.css'/>"
            ],
            "correctAnswers": ["<?xml-stylesheet href='style.css'?>"],
            "type": "radio"
        },
        {
            "question": "What does the 'self::node()' XPath expression select?",
            "options": [
                "The current node",
                "The parent node",
                "The child nodes",
                "The sibling nodes"
            ],
            "correctAnswers": ["The current node"],
            "type": "radio"
        },
        {
            "question": "What does the 'not()' function do in XPath?",
            "options": [
                "Negates a condition",
                "Selects nodes that match a condition",
                "Formats XML data",
                "Converts data types"
            ],
            "correctAnswers": ["Negates a condition"],
            "type": "radio"
        },
        {
            "question": "Which XML attribute specifies the schema location for validation?",
            "options": [
                "xsi:schemaLocation",
                "xsi:noNamespaceSchemaLocation",
                "schema:location",
                "schema:namespace"
            ],
            "correctAnswers": ["xsi:schemaLocation", "xsi:noNamespaceSchemaLocation"],
            "type": "checkbox"
        },
        {
            "question": "What is the correct syntax for an XML entity declaration?",
            "options": [
                "<!ENTITY name 'value'>",
                "<!ENTITY name VALUE>",
                "<ENTITY name='value'>",
                "<ENTITY name VALUE>"
            ],
            "correctAnswers": ["<!ENTITY name 'value'>"],
            "type": "radio"
        },
        {
            "question": "Which XPath axis selects the parent node?",
            "options": [
                "parent",
                "ancestor",
                "child",
                "descendant"
            ],
            "correctAnswers": ["parent"],
            "type": "radio"
        },
        {
            "question": "What does the 'last()' function do in XPath?",
            "options": [
                "Selects the last node in a set",
                "Selects the first node in a set",
                "Counts the number of nodes",
                "Selects the last attribute"
            ],
            "correctAnswers": ["Selects the last node in a set"],
            "type": "radio"
        },
        {
            "question": "Which of the following is not an XML data type?",
            "options": [
                "xs:integer",
                "xs:string",
                "xs:array",
                "xs:boolean"
            ],
            "correctAnswers": ["xs:array"],
            "type": "radio"
        },
        {
            "question": "What does the 'child::*' XPath expression select?",
            "options": [
                "All child elements of the current node",
                "All sibling elements of the current node",
                "All ancestor elements of the current node",
                "All descendant elements of the current node"
            ],
            "correctAnswers": ["All child elements of the current node"],
            "type": "radio"
        },
        {
            "question": "What is the correct way to include a CDATA section in XML?",
            "options": [
                "<![CDATA[content]]>",
                "<!CDATA[content]>",
                "<![CDATA content]>",
                "<CDATA[content]]>"
            ],
            "correctAnswers": ["<![CDATA[content]]>"],
            "type": "radio"
        },
        {
            "question": "What does the 'name()' function return in XPath?",
            "options": [
                "The name of the current node",
                "The value of the current node",
                "The position of the current node",
                "The attributes of the current node"
            ],
            "correctAnswers": ["The name of the current node"],
            "type": "radio"
        },
        {
            "question": "How do you define an XML element with attributes?",
            "options": [
                "<element attribute='value'>content</element>",
                "<element value='attribute'>content</element>",
                "<element attribute='value'/>",
                "<element value='attribute'></element>"
            ],
            "correctAnswers": ["<element attribute='value'>content</element>", "<element attribute='value'/>"],
            "type": "checkbox"
        },
        {
            "question": "Which of the following XPath expressions selects all elements named 'item'?",
            "options": [
                "//item",
                "/item",
                "item",
                "/*/item"
            ],
            "correctAnswers": ["//item"],
            "type": "radio"
        },
        {
            "question": "What is the purpose of the 'schema' keyword in XML Schema?",
            "options": [
                "To define the structure and rules for XML data",
                "To create XML elements",
                "To add comments",
                "To include namespaces"
            ],
            "correctAnswers": ["To define the structure and rules for XML data"],
            "type": "radio"
        },
        {
            "question": "Which of the following is a valid way to include XML processing instructions?",
            "options": [
                "<?processing-instruction data?>",
                "<?data processing-instruction?>",
                "<processing-instruction data>",
                "<?data?>"
            ],
            "correctAnswers": ["<?processing-instruction data?>"],
            "type": "radio"
        },
        {
            "question": "What is the correct syntax for declaring an XML entity reference?",
            "options": [
                "&name;",
                "<name>",
                "name",
                "{name}"
            ],
            "correctAnswers": ["&name;"],
            "type": "radio"
        },
        {
            "question": "Which XPath expression selects all descendant elements of the current node?",
            "options": [
                "descendant::*",
                "ancestor::*",
                "child::*",
                "parent::*"
            ],
            "correctAnswers": ["descendant::*"],
            "type": "radio"
        },
        {
            "question": "How do you define an XML schema for validating XML documents?",
            "options": [
                "Using <xs:schema> element",
                "Using <schema> element",
                "Using <xsd:schema> element",
                "Using <validation> element"
            ],
            "correctAnswers": ["Using <xs:schema> element", "Using <xsd:schema> element"],
            "type": "checkbox"
        },
        {
            "question": "What is the purpose of the 'key()' function in XPath?",
            "options": [
                "To retrieve elements based on key values",
                "To select nodes based on their position",
                "To format XML documents",
                "To convert data types"
            ],
            "correctAnswers": ["To retrieve elements based on key values"],
            "type": "radio"
        },
        {
            "question": "Which of the following is not a valid XML tag?",
            "options": [
                "<tag>",
                "<tag/>",
                "<tag></tag>",
                "<tag/>/"
            ],
            "correctAnswers": ["<tag/>/"],
            "type": "radio"
        },
        {
            "question": "What is the correct way to include a namespace in an XML element?",
            "options": [
                "<element xmlns:prefix='URI'>",
                "<element namespace:prefix='URI'>",
                "<element xmlns='URI'>",
                "<element prefix='URI'>"
            ],
            "correctAnswers": ["<element xmlns:prefix='URI'>"],
            "type": "radio"
        },
        {
            "question": "Which XPath function selects the last element in a node set?",
            "options": [
                "last()",
                "position()",
                "count()",
                "first()"
            ],
            "correctAnswers": ["last()"],
            "type": "radio"
        },
        {
            "question": "What does the 'count()' function do in XPath?",
            "options": [
                "Counts the number of nodes in a set",
                "Selects the last node",
                "Formats the XML data",
                "Selects the first node"
            ],
            "correctAnswers": ["Counts the number of nodes in a set"],
            "type": "radio"
        },
        {
            "question": "What is the purpose of an XML Document Type Definition (DTD)?",
            "options": [
                "To define the structure and rules for XML documents",
                "To create XML elements",
                "To add comments",
                "To include namespaces"
            ],
            "correctAnswers": ["To define the structure and rules for XML documents"],
            "type": "radio"
        },
        {
            "question": "What does the 'preceding-sibling::*' XPath expression select?",
            "options": [
                "All preceding sibling elements of the current node",
                "All following sibling elements of the current node",
                "All child elements of the current node",
                "All ancestor elements of the current node"
            ],
            "correctAnswers": ["All preceding sibling elements of the current node"],
            "type": "radio"
        },
        {
            "question": "Which XML declaration specifies the XML version?",
            "options": [
                "<?xml version='1.0'?>",
                "<xml version='1.0'>",
                "<!DOCTYPE xml>",
                "<?xml version='2.0'?>"
            ],
            "correctAnswers": ["<?xml version='1.0'?>"],
            "type": "radio"
        },
        {
            "question": "What is the purpose of the 'default' keyword in XML Schema?",
            "options": [
                "To specify default values for elements and attributes",
                "To create new namespaces",
                "To add comments",
                "To define data types"
            ],
            "correctAnswers": ["To specify default values for elements and attributes"],
            "type": "radio"
        },
        {
            "question": "Which of the following is a valid XML document?",
            "options": [
                "<?xml version='1.0'?><root></root>",
                "<root></root>",
                "<root></root>",
                "<root/>"
            ],
            "correctAnswers": ["<?xml version='1.0'?><root></root>", "<root></root>", "<root/>"],
            "type": "checkbox"
        },
        {
            "question": "Which XPath function retrieves the text content of an element?",
            "options": [
                "text()",
                "value()",
                "content()",
                "node()"
            ],
            "correctAnswers": ["text()"],
            "type": "radio"
        },
        {
            "question": "What does the 'ancestor-or-self::*' XPath expression select?",
            "options": [
                "The current node and all its ancestor nodes",
                "All descendant nodes",
                "All child nodes",
                "All sibling nodes"
            ],
            "correctAnswers": ["The current node and all its ancestor nodes"],
            "type": "radio"
        },
        {
            "question": "Which of the following XML elements is used to define a schema?",
            "options": [
                "<xs:schema>",
                "<schema>",
                "<xsd:schema>",
                "<xml-schema>"
            ],
            "correctAnswers": ["<xs:schema>", "<xsd:schema>"],
            "type": "checkbox"
        }
    ];


    let currentQuestions = [];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function getRandomQuestions(data, numQuestions) {
        const shuffled = shuffleArray([...data]);
        return shuffled.slice(0, numQuestions);
    }

    function renderQuestion(questionData) {
        const quizContainer = document.getElementById('quiz-container');
        const questionElement = document.createElement('div');
        questionElement.classList.add('question-container');

        // Question text
        const questionText = document.createElement('p');
        questionText.textContent = questionData.question;
        questionElement.appendChild(questionText);

        // Options
        questionData.options.forEach(option => {
            const input = document.createElement('input');
            input.type = questionData.type;
            input.name = questionData.question; // Ensure unique name for radio buttons
            input.value = option;

            const label = document.createElement('label');
            label.textContent = option;

            if (questionData.type === 'radio') {
                input.id = option; // Use option text as ID for unique label association
            }

            const optionDiv = document.createElement('div');
            optionDiv.classList.add('options');
            optionDiv.appendChild(input);
            optionDiv.appendChild(label);
            questionElement.appendChild(optionDiv);
        });

        quizContainer.appendChild(questionElement);
    }

    function checkAnswers() {
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; // Clear previous results

        let score = 0;
        const incorrectQuestions = [];

        currentQuestions.forEach(questionData => {
            const selectedOptions = Array.from(document.querySelectorAll(`input[name="${questionData.question}"]:checked`)).map(input => input.value);

            // Check if the selected options match the correct answers
            const isCorrect = selectedOptions.length === questionData.correctAnswers.length &&
                selectedOptions.every(value => questionData.correctAnswers.includes(value));

            if (isCorrect) {
                score++;
            } else {
                incorrectQuestions.push({
                    question: questionData.question,
                    correctAnswers: questionData.correctAnswers,
                    selectedOptions
                });
            }
        });

        resultsContainer.textContent = `Your score: ${score}/${currentQuestions.length}`;

        if (incorrectQuestions.length > 0) {
            const feedbackContainer = document.createElement('div');
            feedbackContainer.innerHTML = '<h3>Feedback:</h3>';

            currentQuestions.forEach(questionData => {
                const questionFeedback = document.createElement('div');
                const selectedOptions = Array.from(document.querySelectorAll(`input[name="${questionData.question}"]:checked`)).map(input => input.value);

                const isCorrect = selectedOptions.length === questionData.correctAnswers.length &&
                    selectedOptions.every(value => questionData.correctAnswers.includes(value));

                questionFeedback.innerHTML = `
                <p><strong>Question:</strong> ${questionData.question}</p>
                <p><strong>Correct Answers:</strong> ${questionData.correctAnswers.join(', ')}</p>
                <p><strong>Your Answers:</strong> ${selectedOptions.join(', ')}</p>
                <p style="color: ${isCorrect ? 'green' : 'red'};">${isCorrect ? 'Correct!' : 'Incorrect.'}</p>
            `;
                feedbackContainer.appendChild(questionFeedback);
            });

            resultsContainer.appendChild(feedbackContainer);
        }
    }


    function applySettings() {
        const numQuestions = parseInt(prompt('Enter number of questions (1-100):'), 10);
        if (isNaN(numQuestions) || numQuestions < 1 || numQuestions > 100) {
            alert('Please enter a number between 1 and 50.');
            return;
        }

        currentQuestions = getRandomQuestions(quizData, numQuestions);
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = ''; // Clear previous questions

        currentQuestions.forEach(renderQuestion);
    }

    // Initial load
    applySettings();

    // Add submit button event listener
    document.getElementById('submit-button').addEventListener('click', checkAnswers);
});
