import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@/components/ui/alert/Alert";

const AlertPreview: React.FC = () => {
    return (
        <div className="flex flex-col gap-1">
            <Alert>
                <AlertIcon>🛈</AlertIcon>
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                    Your profile has been updated successfully.
                </AlertDescription>
            </Alert>
            <Alert type='success'>
                <AlertIcon>✔</AlertIcon>
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                    Your order has been placed successfully.
                </AlertDescription>
            </Alert>
            <Alert type='danger'>
                <AlertIcon>!</AlertIcon>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    There was an error processing your payment.
                </AlertDescription>
            </Alert>
            <Alert type='warning'>
                <AlertIcon>⚠</AlertIcon>
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                    Your password will expire in 3 days.
                </AlertDescription>
            </Alert>
        </div>
    );
};

export default AlertPreview;