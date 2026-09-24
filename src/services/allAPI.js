import apiService from "../api/apiServices";

// saveResumeAPI : add resume details to JSON server

export const saveResumeAPI = async(resumeDetails)=>{
    return await apiService('POST','/resume',resumeDetails)

}

// viewResumeAPI:called by view resume component when resume id added

export const viewResumeAPI = async(resumeId)=>{
    return await apiService('GET',`/resume/${resumeId}`,{})

}

//  allResume APi : called by allresume component when resume id added

export const allResumesAPI = async()=>{
    return await apiService('GET',`/resume`,{})

}

//  downloadResumeAPI: called by viewresume component when resume get displayed

export const downloadResumeAPI = async(resumeDetails)=>{
    return await apiService('POST','/downloads',resumeDetails)

}

// getAllDownloadsResumeAPI: called by downloads component when resume get downloaded

export const getAllDownloadResumeAPI = async()=>{
    return await apiService('GET','/downloads',{})

}

// updateResumeAPI : called by edit component when resume got change


export const updateResumeAPI = async(resumeId,resumeDetails)=>{
    return await apiService('PUT',`/resume/${resumeId}`,resumeDetails)

}
// deleteResumeAPI: called by all resume component when delete button clicked

export const deleteResumeAPI = async(resumeId)=> {
    return await apiService('DELETE',`/resume/${resumeId}`,{})
}