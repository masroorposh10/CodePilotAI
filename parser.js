let response = {
    content: '```json\n' +
      '{\n' +
      '  "reviews": [\n' +
      '    {\n' +
      '      "lineNumber": 14,\n' +
      '      "reviewComment": "Returning `null` directly in the class body is not valid C#. This should be inside a method or property."\n' +
      '    },\n' +
      '    {\n' +
      '      "lineNumber": 11,\n' +
      '      "reviewComment": "The class `stuff` should have a more descriptive name that clearly indicates its purpose and role within the application."\n' +
      '    },\n' +
      '    {\n' +
      '      "lineNumber": 11,\n' +
      '      "reviewComment": "The class declaration `stuff` is missing its opening and closing braces `{}`."\n' +
      '    }\n' +
      '  ]\n' +
      '}\n' +
      '```',
    role: 'assistant'
  };
  
  // Ensure content is a string
  let content = String(response.content);
  
  // Use a regular expression to capture the content between ```json and ```
  let match = content.r(/```json\n([\s\S]*?)\n```/);
  
  if (match && match[1]) {
    let jsonContent = match[1];
    
    try {
      // Parse the JSON content
      let parsedContent = JSON.parse(jsonContent);
      
      // Output the result
      console.log(parsedContent);
    } catch (e) {
      console.error('Failed to parse JSON content:', e);
    }
  } else {
    console.log('No matching content found');
  }
  