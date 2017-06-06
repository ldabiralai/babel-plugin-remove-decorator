import babelPluginSyntaxDecorators from 'babel-plugin-syntax-decorators';

const decoratableTypes = [
    "ArrayPattern",
    "AssignmentPattern",
    "ClassExpression",
    "ClassDeclaration",
    "ClassMethod",
    "ClassProperty",
    "Identifier",
    "ObjectMethod",
    "ObjectPattern",
    "ObjectProperty",
    "RestElement"
];

export default function () {
    return {
        inherits: babelPluginSyntaxDecorators,
        visitor: {
            [decoratableTypes.join('|')]: function (path) {
                path.node.decorators = null
            }
        }
    }
}
