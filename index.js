export default function () {
    return {
        visitor: {
            ClassExpression: function (path) {
                path.node.decorators = null
            }
        }
    }
}
