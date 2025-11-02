export function TemplateSchemaPreview({ schema }: any) {
    return (
        <div>
            <h3 className="font-semibold mb-2">Generated Schema</h3>
            <pre className="bg-muted text-sm p-4 rounded-md overflow-auto">
                {JSON.stringify(schema, null, 2)}
            </pre>
        </div>
    );
}
