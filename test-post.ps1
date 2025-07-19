# Test POST request with form data
$uri = "http://localhost:4323/api/contact.json"
$form = @{
    'name' = 'Test User'
    'communication-method' = 'email'
    'communication-detail' = 'test@example.com'
    'message' = 'This is a test message'
    'formId' = 'contact-form'
}

try {
    $response = Invoke-RestMethod -Uri $uri -Method Post -Form $form
    Write-Host "Success: $($response | ConvertTo-Json -Depth 10)"
} catch {
    Write-Host "Error: $($_.Exception.Message)"
    Write-Host "Response: $($_.Exception.Response)"
}
