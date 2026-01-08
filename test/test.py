import requests

url = "https://airtable.com/v0.3/view/viwQUH792955wSCmV/downloadCsv?x-time-zone=America%2FChicago&x-user-locale=en&x-airtable-application-id=appjDG7vmPOm1pO7S&stringifiedObjectParams=%7B%22origin%22%3A%22viewMenuPopover%22%7D&requestId=req1kymnvN5gySm0H&accessPolicy=%7B%22allowedActions%22%3A%5B%7B%22modelClassName%22%3A%22view%22%2C%22modelIdSelector%22%3A%22viwQUH792955wSCmV%22%2C%22action%22%3A%22readSharedViewData%22%7D%2C%7B%22modelClassName%22%3A%22view%22%2C%22modelIdSelector%22%3A%22viwQUH792955wSCmV%22%2C%22action%22%3A%22getMetadataForPrinting%22%7D%2C%7B%22modelClassName%22%3A%22view%22%2C%22modelIdSelector%22%3A%22viwQUH792955wSCmV%22%2C%22action%22%3A%22readSignedAttachmentUrls%22%7D%2C%7B%22modelClassName%22%3A%22row%22%2C%22modelIdSelector%22%3A%22rows%20*%5BdisplayedInView%3DviwQUH792955wSCmV%5D%22%2C%22action%22%3A%22createDocumentPreviewSession%22%7D%2C%7B%22modelClassName%22%3A%22view%22%2C%22modelIdSelector%22%3A%22viwQUH792955wSCmV%22%2C%22action%22%3A%22downloadCsv%22%7D%2C%7B%22modelClassName%22%3A%22view%22%2C%22modelIdSelector%22%3A%22viwQUH792955wSCmV%22%2C%22action%22%3A%22downloadICal%22%7D%2C%7B%22modelClassName%22%3A%22row%22%2C%22modelIdSelector%22%3A%22rows%20*%5BdisplayedInView%3DviwQUH792955wSCmV%5D%22%2C%22action%22%3A%22downloadAttachment%22%7D%5D%2C%22shareId%22%3A%22shr763VHjlzPBDCgN%22%2C%22applicationId%22%3A%22appjDG7vmPOm1pO7S%22%2C%22generationNumber%22%3A0%2C%22expires%22%3A%222026-01-29T00%3A00%3A00.000Z%22%2C%22signature%22%3A%224a191072a447dfcfdf5d8da025222fcfae3f554533c55c09f24e2f80ed39043b%22%7D"

headers = {
    "User-Agent": "Mozilla/5.0",
    "Accept": "text/csv,*/*",
}

r = requests.get(url, headers=headers, timeout=60)
r.raise_for_status()

with open("newgrad-jobs.csv", "wb") as f:
    f.write(r.content)

print("Saved newgrad-jobs.csv")
