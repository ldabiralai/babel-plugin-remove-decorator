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
        visitor: {
            [decoratableTypes.join('|')]: function (path) {
                path.node.decorators = null
            }
        }
    }
}
