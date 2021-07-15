// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  # Table of Contents
  * [Description](#description)
  * [Dependencies](#dependencies)
  * [Instructions](#instructions)
  * [Contributors](#contributors)
  
  # Description
  ${data.description}
  
  # Dependencies
  ${data.dependencies}
  
  # Instructions
  ${data.instructions}
    
  # Contributors
  ${data.contributors}
`;
}

module.exports = generateMarkdown;
